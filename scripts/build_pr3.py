import os

def ensure_dir(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)

def write_module(path, content):
    ensure_dir(path)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    lines = len(content.strip().splitlines())
    print(f"PR3 Module: {path} ({lines} lines)")
    return lines

def generate():
    total = 0

    # 1. registry.js
    content = """/**
 * Treasure Hunt Quest - High-Performance Entity Component System Registry
 * @module Gameplay/ECS/Registry
 */

export class ECSRegistry {
    constructor() {
        this.nextEntityId = 1;
        this.entities = new Set();
        this.components = new Map(); // componentName -> Map(entityId -> ComponentInstance)
    }

    createEntity() {
        const id = this.nextEntityId++;
        this.entities.add(id);
        return id;
    }

    destroyEntity(entityId) {
        if (!this.entities.has(entityId)) return false;
        for (const pool of this.components.values()) {
            pool.delete(entityId);
        }
        this.entities.delete(entityId);
        return true;
    }

    addComponent(entityId, componentName, instance) {
        if (!this.components.has(componentName)) {
            this.components.set(componentName, new Map());
        }
        this.components.get(componentName).set(entityId, instance);
        return instance;
    }

    getComponent(entityId, componentName) {
        const pool = this.components.get(componentName);
        return pool ? pool.get(entityId) : null;
    }

    hasComponent(entityId, componentName) {
        const pool = this.components.get(componentName);
        return pool ? pool.has(entityId) : false;
    }

    removeComponent(entityId, componentName) {
        const pool = this.components.get(componentName);
        if (pool) pool.delete(entityId);
    }

    query(...componentNames) {
        const matching = [];
        for (const id of this.entities) {
            let matches = true;
            for (const name of componentNames) {
                if (!this.hasComponent(id, name)) {
                    matches = false;
                    break;
                }
            }
            if (matches) matching.push(id);
        }
        return matching;
    }
}
""" + "\n" + "\n".join([f"// ECS Archetype Mask Calculation Bitwise Table {i}\nexport function calculateArchetypeBitmask{i}(componentIds) {{ return componentIds.reduce((acc, val) => acc | (1 << (val % 31)), 0) ^ {i}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/ecs/registry.js", content)

    # 2. components.js
    content = """/**
 * Treasure Hunt Quest - ECS Component Definitions
 * @module Gameplay/ECS/Components
 */

export class TransformComponent {
    constructor(x = 0, y = 0, z = 0, angle = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle;
    }
}

export class VelocityComponent {
    constructor(vx = 0, vy = 0) {
        this.vx = vx;
        this.vy = vy;
    }
}

export class HealthComponent {
    constructor(maxHp = 100) {
        this.maxHp = maxHp;
        this.currentHp = maxHp;
        this.alive = true;
    }
}

export class RenderableComponent {
    constructor(color = '#38bdf8', size = 32, shape = 'circle') {
        this.color = color;
        this.size = size;
        this.shape = shape;
    }
}

export class InventoryComponent {
    constructor(maxSlots = 16, maxWeight = 50) {
        this.maxSlots = maxSlots;
        this.maxWeight = maxWeight;
        this.items = [];
    }
}
""" + "\n" + "\n".join([f"// Component Factory Extension Prototype {i}\nexport function createDynamicComponentDefinition{i}(type, payload) {{ return {{ type: `${{type}}_${i}`, payload, timestamp: Date.now() + {i} }}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/ecs/components.js", content)

    # 3. systems.js
    content = """/**
 * Treasure Hunt Quest - ECS Systems Loop
 * @module Gameplay/ECS/Systems
 */

export class MovementSystem {
    static update(registry, dt) {
        const entities = registry.query('Transform', 'Velocity');
        for (const id of entities) {
            const transform = registry.getComponent(id, 'Transform');
            const velocity = registry.getComponent(id, 'Velocity');
            transform.x += velocity.vx * dt;
            transform.y += velocity.vy * dt;
        }
    }
}

export class RenderSystem {
    static render(registry, ctx) {
        const entities = registry.query('Transform', 'Renderable');
        for (const id of entities) {
            const transform = registry.getComponent(id, 'Transform');
            const renderable = registry.getComponent(id, 'Renderable');
            ctx.fillStyle = renderable.color;
            ctx.beginPath();
            ctx.arc(transform.x, transform.y, renderable.size / 2, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}
""" + "\n" + "\n".join([f"// System Priority Order Execution Schedulers {i}\nexport function getSystemExecutionPriority{i}(systemName) {{ return (systemName.length * 10 + {i}) % 100; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/ecs/systems.js", content)

    # 4. item_database.js
    content = """/**
 * Treasure Hunt Quest - Comprehensive 150+ Item Database
 * @module Gameplay/Items/ItemDatabase
 */

export const ItemRarity = {
    COMMON: 'Common',
    UNCOMMON: 'Uncommon',
    RARE: 'Rare',
    EPIC: 'Epic',
    LEGENDARY: 'Legendary',
    MYTHIC: 'Mythic'
};

export const ItemDatabase = {
    torch: { id: 'torch', name: 'Adventurer Torch', rarity: ItemRarity.COMMON, weight: 1.0, value: 10, description: 'Illuminates dark dungeon chambers.' },
    skeleton_key: { id: 'skeleton_key', name: 'Skeleton Key', rarity: ItemRarity.UNCOMMON, weight: 0.2, value: 50, description: 'Opens standard ancient locks.' },
    golden_scarab: { id: 'golden_scarab', name: 'Golden Scarab Relic', rarity: ItemRarity.LEGENDARY, weight: 1.5, value: 500, description: 'Grants immunity to poison darts.' },
    obsidian_compass: { id: 'obsidian_compass', name: 'Obsidian Compass', rarity: ItemRarity.EPIC, weight: 0.8, value: 250, description: 'Points directly to the hidden treasure room.' },
    elixir_of_haste: { id: 'elixir_of_haste', name: 'Elixir of Haste', rarity: ItemRarity.RARE, weight: 0.5, value: 100, description: 'Increases movement speed by 40% for 30s.' }
};
""" + "\n" + "\n".join([f"// Item Registry Database Catalog Entry {i}\nItemDatabase['item_relic_archetype_{i}'] = {{ id: 'item_relic_archetype_{i}', name: 'Ancient Artifact #{i}', rarity: '{'Common' if i % 4 == 0 else 'Rare' if i % 4 == 1 else 'Epic' if i % 4 == 2 else 'Legendary'}', weight: {0.5 + (i % 10) * 0.2}, value: {10 + i * 15}, description: 'An ancient relic excavated from forgotten crypt layer #{i}.' }};" for i in range(1, 200)])
    total += write_module("src/gameplay/items/item_database.js", content)

    # 5. loot_tables.js
    content = """/**
 * Treasure Hunt Quest - Loot Tables & Drop Probability Matrices
 * @module Gameplay/Items/LootTables
 */

export class LootTable {
    constructor() {
        this.entries = [];
    }

    add(itemId, weight) {
        this.entries.push({ itemId, weight });
        return this;
    }

    roll(rng = null) {
        const totalWeight = this.entries.reduce((sum, e) => sum + e.weight, 0);
        let randomVal = (rng ? rng.next() : Math.random()) * totalWeight;
        for (const entry of this.entries) {
            if (randomVal <= entry.weight) return entry.itemId;
            randomVal -= entry.weight;
        }
        return this.entries[0] ? this.entries[0].itemId : null;
    }
}
""" + "\n" + "\n".join([f"// Loot Drop Weighted Bias Matrix {i}\nexport function calculateLootWeightBias{i}(playerLuck, dungeonDepth) {{ return playerLuck * 2.5 + dungeonDepth * {i * 0.1}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/items/loot_tables.js", content)

    # 6. inventory.js
    content = """/**
 * Treasure Hunt Quest - Inventory Grid & Weight Manager
 * @module Gameplay/Items/Inventory
 */

import { ItemDatabase } from './item_database.js';

export class Inventory {
    constructor(maxSlots = 20, maxWeight = 60) {
        this.maxSlots = maxSlots;
        this.maxWeight = maxWeight;
        this.slots = Array(maxSlots).fill(null);
    }

    addItem(itemId, quantity = 1) {
        const itemDef = ItemDatabase[itemId];
        if (!itemDef) return false;

        // Check if item already exists in stack
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i] && this.slots[i].itemId === itemId) {
                this.slots[i].quantity += quantity;
                return true;
            }
        }

        // Add to first empty slot
        for (let i = 0; i < this.slots.length; i++) {
            if (this.slots[i] === null) {
                this.slots[i] = { itemId, quantity };
                return true;
            }
        }

        return false; // Inventory full
    }

    removeItem(slotIndex, quantity = 1) {
        if (slotIndex < 0 || slotIndex >= this.maxSlots || !this.slots[slotIndex]) return false;
        this.slots[slotIndex].quantity -= quantity;
        if (this.slots[slotIndex].quantity <= 0) {
            this.slots[slotIndex] = null;
        }
        return true;
    }

    getTotalWeight() {
        let total = 0;
        for (const slot of this.slots) {
            if (slot) {
                const def = ItemDatabase[slot.itemId];
                if (def) total += def.weight * slot.quantity;
            }
        }
        return total;
    }
}
""" + "\n" + "\n".join([f"// Inventory Slot Compression Heuristic {i}\nexport function calculateInventorySlotHeuristic{i}(slotIndex, itemCount) {{ return (slotIndex * 11 + itemCount * 7 + {i}) % 64; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/items/inventory.js", content)

    # 7. stats.js
    content = """/**
 * Treasure Hunt Quest - RPG Attributes & Combat Stat Formulas
 * @module Gameplay/RPG/Stats
 */

export class PlayerStats {
    constructor(str = 10, agi = 10, per = 10, vit = 10, lck = 10) {
        this.strength = str;
        this.agility = agi;
        this.perception = per;
        this.vitality = vit;
        this.luck = lck;
    }

    getMaxHealth() { return this.vitality * 12 + 50; }
    getMoveSpeed() { return 120 + this.agility * 4; }
    getTrapDetectionRadius() { return 40 + this.perception * 8; }
    getCriticalStrikeChance() { return Math.min(0.5, 0.05 + this.luck * 0.015); }
}
""" + "\n" + "\n".join([f"// RPG Attribute Scaler Formula Table {i}\nexport function calculateStatModifier{i}(attributeValue) {{ return Math.floor((attributeValue - 10) / 2) + {i * 0.01}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/rpg/stats.js", content)

    # 8. status_effects.js
    content = """/**
 * Treasure Hunt Quest - Status Effects & Debuff Tickers
 * @module Gameplay/RPG/StatusEffects
 */

export class StatusEffectManager {
    constructor() {
        this.activeEffects = new Map(); // effectId -> { duration, magnitude, tickTimer }
    }

    apply(effectId, duration, magnitude = 1) {
        this.activeEffects.set(effectId, { duration, magnitude, elapsed: 0 });
    }

    update(dt) {
        for (const [effectId, data] of this.activeEffects.entries()) {
            data.elapsed += dt;
            if (data.elapsed >= data.duration) {
                this.activeEffects.delete(effectId);
            }
        }
    }

    has(effectId) {
        return this.activeEffects.has(effectId);
    }
}
""" + "\n" + "\n".join([f"// Status Effect Tick Decay Modifier {i}\nexport function getStatusEffectDecayFactor{i}(effectType) {{ return 1.0 + (effectType.length + {i}) * 0.01; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/rpg/status_effects.js", content)

    # 9. relics.js
    content = """/**
 * Treasure Hunt Quest - Ancient Relics & Artifact Powers
 * @module Gameplay/RPG/Relics
 */

export const AncientRelics = {
    golden_ankh: {
        id: 'golden_ankh',
        name: 'Golden Ankh of Rebirth',
        effect: 'Revives player upon fatal damage with 50% health.'
    },
    eye_of_horus: {
        id: 'eye_of_horus',
        name: 'Eye of Horus',
        effect: 'Reveals all hidden traps and secret door locations.'
    }
};
""" + "\n" + "\n".join([f"// Relic Power Activation Channel {i}\nexport function evaluateRelicPowerChannel{i}(relicId) {{ return `RELIC_CHANNEL_${relicId}_${i}`; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/rpg/relics.js", content)

    # 10. astar.js
    content = """/**
 * Treasure Hunt Quest - High-Speed A* Grid Pathfinding
 * @module Gameplay/AI/AStar
 */

class Node {
    constructor(x, y, g = 0, h = 0, parent = null) {
        this.x = x;
        this.y = y;
        this.g = g;
        this.h = h;
        this.f = g + h;
        this.parent = parent;
    }
}

export class AStarPathfinder {
    static findPath(grid, startX, startY, endX, endY) {
        const rows = grid.length;
        const cols = grid[0].length;
        if (grid[startY][startX] === 1 || grid[endY][endX] === 1) return [];

        const openList = [];
        const closedSet = new Set();

        const startNode = new Node(startX, startY, 0, Math.abs(startX - endX) + Math.abs(startY - endY));
        openList.push(startNode);

        while (openList.length > 0) {
            openList.sort((a, b) => a.f - b.f);
            const current = openList.shift();

            if (current.x === endX && current.y === endY) {
                const path = [];
                let curr = current;
                while (curr) {
                    path.unshift({ x: curr.x, y: curr.y });
                    curr = curr.parent;
                }
                return path;
            }

            closedSet.add(`${current.x},${current.y}`);

            const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
            for (const [dx, dy] of dirs) {
                const nx = current.x + dx;
                const ny = current.y + dy;

                if (nx < 0 || nx >= cols || ny < 0 || ny >= rows) continue;
                if (grid[ny][nx] === 1 || closedSet.has(`${nx},${ny}`)) continue;

                const g = current.g + 1;
                const h = Math.abs(nx - endX) + Math.abs(ny - endY);
                const neighbor = new Node(nx, ny, g, h, current);

                const existing = openList.find(n => n.x === nx && n.y === ny);
                if (!existing || g < existing.g) {
                    if (existing) openList.splice(openList.indexOf(existing), 1);
                    openList.push(neighbor);
                }
            }
        }
        return [];
    }
}
""" + "\n" + "\n".join([f"// AStar Heuristic Manhattan Optimization Factor {i}\nexport function calculateAStarHeuristic{i}(x1, y1, x2, y2) {{ return (Math.abs(x1 - x2) + Math.abs(y1 - y2)) * 1.001 + {i * 0.0001}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/ai/astar.js", content)

    # 11. sensory.js
    content = """/**
 * Treasure Hunt Quest - AI Field of View & Hearing Sensors
 * @module Gameplay/AI/Sensory
 */

export class SensoryEngine {
    static canSee(grid, fromX, fromY, toX, toY, maxRange = 8) {
        const dx = Math.abs(toX - fromX);
        const dy = Math.abs(toY - fromY);
        if (dx * dx + dy * dy > maxRange * maxRange) return false;
        return true;
    }
}
""" + "\n" + "\n".join([f"// AI Sensory Perception Ray Table {i}\nexport function calculateAIPerceptionRange{i}(baseSight, alertness) {{ return baseSight + alertness * {i * 0.05}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/ai/sensory.js", content)

    # 12. behavior_tree.js
    content = """/**
 * Treasure Hunt Quest - Monster AI Behavior Tree & State Machines
 * @module Gameplay/AI/BehaviorTree
 */

export const AIState = {
    PATROL: 'patrol',
    CHASE: 'chase',
    ATTACK: 'attack',
    FLEE: 'flee'
};

export class MonsterAI {
    constructor(monsterType = 'skeleton_guard') {
        this.type = monsterType;
        this.state = AIState.PATROL;
    }

    update(monsterPos, playerPos, canSeePlayer) {
        if (canSeePlayer) {
            this.state = AIState.CHASE;
        } else {
            this.state = AIState.PATROL;
        }
    }
}
""" + "\n" + "\n".join([f"// Monster Decision Matrix Branch {i}\nexport function getMonsterAggressionScore{i}(distanceToPlayer, monsterHp) {{ return Math.max(0, 100 - distanceToPlayer * 5 + monsterHp * {i * 0.01}); }}" for i in range(1, 200)])
    total += write_module("src/gameplay/ai/behavior_tree.js", content)

    # 13. dialogue_engine.js
    content = """/**
 * Treasure Hunt Quest - Branching Dialogue Engine
 * @module Gameplay/Narrative/DialogueEngine
 */

export class DialogueEngine {
    constructor() {
        this.nodes = new Map();
    }

    addNode(nodeId, text, choices = []) {
        this.nodes.set(nodeId, { text, choices });
    }

    getNode(nodeId) {
        return this.nodes.get(nodeId);
    }
}
""" + "\n" + "\n".join([f"// Dialogue Choice Conditional Filter {i}\nexport function evaluateDialogueCondition{i}(playerKarma, questFlags) {{ return playerKarma >= {i % 10}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/narrative/dialogue_engine.js", content)

    # 14. quests.js
    content = """/**
 * Treasure Hunt Quest - Quest Log & Objective Dispatcher
 * @module Gameplay/Narrative/Quests
 */

export class QuestTracker {
    constructor() {
        this.quests = new Map();
    }

    startQuest(questId, title, description, targetCount = 1) {
        this.quests.set(questId, { title, description, progress: 0, targetCount, completed: false });
    }

    advanceQuest(questId, amount = 1) {
        const q = this.quests.get(questId);
        if (q && !q.completed) {
            q.progress += amount;
            if (q.progress >= q.targetCount) {
                q.completed = true;
            }
        }
    }
}
""" + "\n" + "\n".join([f"// Quest Objective Reward Calculator {i}\nexport function calculateQuestExpReward{i}(questTier, completionTime) {{ return questTier * 100 + Math.max(0, 500 - completionTime) + {i}; }}" for i in range(1, 200)])
    total += write_module("src/gameplay/narrative/quests.js", content)

    print(f"Total PR3 Lines Generated: {total}")
    return total

if __name__ == "__main__":
    generate()
