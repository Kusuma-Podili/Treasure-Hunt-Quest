/**
 * Treasure Hunt Quest - Main Game Orchestrator & State Controller
 * @module Game
 */

import { Vector2D } from './engine/math/vector2d.js';
import { Xoshiro256 } from './engine/math/rng.js';

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;

        this.cols = 25;
        this.rows = 19;
        this.tileSize = 32;
        this.offsetX = (this.width - this.cols * this.tileSize) / 2;
        this.offsetY = (this.height - this.rows * this.tileSize) / 2;

        this.rng = new Xoshiro256(Date.now());
        this.grid = null;
        this.fog = Array.from({ length: this.rows }, () => new Uint8Array(this.cols)); // 0: unexplored, 1: explored, 2: visible

        this.player = { x: 1, y: 1 };
        this.treasure = { x: this.cols - 2, y: this.rows - 2 };
        this.traps = [];

        this.hp = 100;
        this.maxHp = 100;
        this.score = 0;
        this.level = 1;
        this.soundEnabled = true;

        this.particles = [];
        this.audioCtx = null;

        this.initInput();
    }

    start() {
        this.initLevel();
        this.loop();
    }

    initAudio() {
        if (!this.audioCtx && typeof window !== 'undefined') {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            if (AudioContext) this.audioCtx = new AudioContext();
        }
    }

    playTone(freq, type = 'sine', duration = 0.1, vol = 0.1) {
        if (!this.soundEnabled) return;
        try {
            this.initAudio();
            if (!this.audioCtx) return;
            const osc = this.audioCtx.createOscillator();
            const gain = this.audioCtx.createGain();
            osc.type = type;
            osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime);
            gain.gain.setValueAtTime(vol, this.audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + duration);
            osc.connect(gain);
            gain.connect(this.audioCtx.destination);
            osc.start();
            osc.stop(this.audioCtx.currentTime + duration);
        } catch (e) {
            // Audio context policy safe
        }
    }

    initLevel() {
        // Generate procedural DFS Backtracker Maze
        this.grid = Array.from({ length: this.rows }, () => new Uint8Array(this.cols).fill(1));
        const stack = [{ x: 1, y: 1 }];
        this.grid[1][1] = 0;

        while (stack.length > 0) {
            const curr = stack[stack.length - 1];
            const neighbors = [];
            const dirs = [[0, -2], [0, 2], [-2, 0], [2, 0]];

            for (const [dx, dy] of dirs) {
                const nx = curr.x + dx;
                const ny = curr.y + dy;
                if (nx > 0 && nx < this.cols - 1 && ny > 0 && ny < this.rows - 1 && this.grid[ny][nx] === 1) {
                    neighbors.push({ x: nx, y: ny, wx: curr.x + dx / 2, wy: curr.y + dy / 2 });
                }
            }

            if (neighbors.length > 0) {
                const chosen = neighbors[Math.floor(Math.random() * neighbors.length)];
                this.grid[chosen.wy][chosen.wx] = 0;
                this.grid[chosen.y][chosen.x] = 0;
                stack.push({ x: chosen.x, y: chosen.y });
            } else {
                stack.pop();
            }
        }

        // Add some random loops for better gameplay
        for (let i = 0; i < 8; i++) {
            const rx = Math.floor(Math.random() * (this.cols - 2)) + 1;
            const ry = Math.floor(Math.random() * (this.rows - 2)) + 1;
            this.grid[ry][rx] = 0;
        }

        this.player = { x: 1, y: 1 };
        this.treasure = { x: this.cols - 2, y: this.rows - 2 };
        this.grid[this.treasure.y][this.treasure.x] = 0;

        // Place a few spike traps
        this.traps = [];
        for (let i = 0; i < 4 + this.level; i++) {
            const tx = Math.floor(Math.random() * (this.cols - 4)) + 2;
            const ty = Math.floor(Math.random() * (this.rows - 4)) + 2;
            if (this.grid[ty][tx] === 0 && !(tx === 1 && ty === 1) && !(tx === this.treasure.x && ty === this.treasure.y)) {
                this.traps.push({ x: tx, y: ty, triggered: false });
            }
        }

        // Reset fog
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.fog[y][x] = 0;
            }
        }
        this.updateSight();
        this.updateHUD();
    }

    updateSight() {
        // Demote 2 to 1
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.fog[y][x] === 2) this.fog[y][x] = 1;
            }
        }
        // Radius 5 sight
        const r = 5;
        for (let dy = -r; dy <= r; dy++) {
            for (let dx = -r; dx <= r; dx++) {
                if (dx * dx + dy * dy <= r * r) {
                    const gx = this.player.x + dx;
                    const gy = this.player.y + dy;
                    if (gx >= 0 && gx < this.cols && gy >= 0 && gy < this.rows) {
                        this.fog[gy][gx] = 2;
                    }
                }
            }
        }
    }

    movePlayer(dir) {
        let dx = 0;
        let dy = 0;
        if (dir === 'w' || dir === 'arrowup') dy = -1;
        if (dir === 's' || dir === 'arrowdown') dy = 1;
        if (dir === 'a' || dir === 'arrowleft') dx = -1;
        if (dir === 'd' || dir === 'arrowright') dx = 1;

        if (dx === 0 && dy === 0) return;

        const nx = this.player.x + dx;
        const ny = this.player.y + dy;

        if (nx >= 0 && nx < this.cols && ny >= 0 && ny < this.rows && this.grid[ny][nx] === 0) {
            this.player.x = nx;
            this.player.y = ny;
            this.playTone(220, 'triangle', 0.05, 0.05);
            this.updateSight();

            // Check Trap
            for (const trap of this.traps) {
                if (trap.x === nx && trap.y === ny && !trap.triggered) {
                    trap.triggered = true;
                    this.hp = Math.max(10, this.hp - 20);
                    this.playTone(130, 'sawtooth', 0.2, 0.15);
                    this.spawnParticles(nx, ny, '#ef4444', 15);
                }
            }

            // Check Treasure
            if (nx === this.treasure.x && ny === this.treasure.y) {
                this.score += 1000 * this.level;
                this.level++;
                this.hp = Math.min(this.maxHp, this.hp + 30);
                this.playTone(587.33, 'square', 0.15, 0.15);
                setTimeout(() => this.playTone(880, 'square', 0.25, 0.15), 100);
                this.spawnParticles(nx, ny, '#fbbf24', 40);

                const notif = document.getElementById('notification-overlay');
                if (notif) {
                    notif.classList.remove('hidden');
                    setTimeout(() => notif.classList.add('hidden'), 1200);
                }

                setTimeout(() => this.initLevel(), 400);
            }

            this.updateHUD();
        }
    }

    initInput() {
        window.addEventListener('keydown', (e) => {
            const k = e.key.toLowerCase();
            if (['w', 'a', 's', 'd', 'arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) {
                e.preventDefault();
                this.movePlayer(k);
            }
        });
    }

    spawnParticles(gx, gy, color, count = 20) {
        const sx = this.offsetX + gx * this.tileSize + this.tileSize / 2;
        const sy = this.offsetY + gy * this.tileSize + this.tileSize / 2;
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const speed = Math.random() * 80 + 20;
            this.particles.push({
                x: sx,
                y: sy,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color,
                life: 1.0,
                maxLife: 1.0,
                size: Math.random() * 4 + 2
            });
        }
    }

    updateHUD() {
        const hpBar = document.getElementById('health-bar-fill');
        const scoreEl = document.getElementById('score-display');
        const levelEl = document.getElementById('level-display');

        if (hpBar) hpBar.style.width = `${(this.hp / this.maxHp) * 100}%`;
        if (scoreEl) scoreEl.innerText = `Score: ${this.score}`;
        if (levelEl) levelEl.innerText = `Level: ${this.level}`;
    }

    loop() {
        this.render();
        requestAnimationFrame(() => this.loop());
    }

    render() {
        const { ctx, width, height, tileSize, offsetX, offsetY } = this;
        ctx.fillStyle = '#05070d';
        ctx.fillRect(0, 0, width, height);

        if (!this.grid) return;

        // 1. Draw Map Tiles
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const vis = this.fog[y][x];
                if (vis === 0) continue; // Unexplored fog

                const px = offsetX + x * tileSize;
                const py = offsetY + y * tileSize;

                if (this.grid[y][x] === 1) {
                    ctx.fillStyle = vis === 2 ? '#1e293b' : '#0f172a'; // Wall
                    ctx.fillRect(px, py, tileSize, tileSize);
                    ctx.strokeStyle = '#334155';
                    ctx.strokeRect(px, py, tileSize, tileSize);
                } else {
                    ctx.fillStyle = vis === 2 ? '#0f172a' : '#090d16'; // Floor
                    ctx.fillRect(px, py, tileSize, tileSize);
                }
            }
        }

        // 2. Draw Traps
        for (const trap of this.traps) {
            if (this.fog[trap.y][trap.x] === 2) {
                const tx = offsetX + trap.x * tileSize + tileSize / 2;
                const ty = offsetY + trap.y * tileSize + tileSize / 2;
                ctx.fillStyle = trap.triggered ? '#475569' : '#ef4444';
                ctx.beginPath();
                ctx.arc(tx, ty, 6, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // 3. Draw Treasure Chest
        if (this.fog[this.treasure.y][this.treasure.x] > 0) {
            const tx = offsetX + this.treasure.x * tileSize;
            const ty = offsetY + this.treasure.y * tileSize;
            ctx.fillStyle = '#fbbf24';
            ctx.fillRect(tx + 6, ty + 6, tileSize - 12, tileSize - 12);
            ctx.strokeStyle = '#f59e0b';
            ctx.lineWidth = 2;
            ctx.strokeRect(tx + 6, ty + 6, tileSize - 12, tileSize - 12);
            ctx.fillStyle = '#d97706';
            ctx.fillRect(tx + 12, ty + 12, tileSize - 24, 4);
        }

        // 4. Draw Player
        const ppx = offsetX + this.player.x * tileSize + tileSize / 2;
        const ppy = offsetY + this.player.y * tileSize + tileSize / 2;

        // Player glow
        const glow = ctx.createRadialGradient(ppx, ppy, 2, ppx, ppy, 18);
        glow.addColorStop(0, '#38bdf8');
        glow.addColorStop(1, 'rgba(56, 189, 248, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(ppx, ppy, 18, 0, Math.PI * 2);
        ctx.fill();

        // Player avatar
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(ppx, ppy, tileSize / 2 - 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#f8fafc';
        ctx.lineWidth = 2;
        ctx.stroke();

        // 5. Update & Draw Particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx * 0.016;
            p.y += p.vy * 0.016;
            p.life -= 0.02;
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            } else {
                ctx.globalAlpha = p.life / p.maxLife;
                ctx.fillStyle = p.color;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * (p.life / p.maxLife), 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1.0;
            }
        }
    }
}
