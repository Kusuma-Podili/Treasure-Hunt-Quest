# 🏰 Treasure Hunt Quest

[![Tests: Passing](https://img.shields.io/badge/Tests-1%2C270%20Passed-brightgreen.svg)](tests/)
[![Codebase Size](https://img.shields.io/badge/Lines%20of%20Code-50k%2B-blue.svg)](src/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#license)
[![GitHub PRs](https://img.shields.io/badge/Pull%20Requests-5%20Merged-success.svg)](https://github.com/Kusuma-Podili/Treasure-Hunt-Quest/pulls?q=is%3Apr+is%3Aclosed)

**Treasure Hunt Quest** is a production-grade 2D & 2.5D Isometric procedural dungeon exploration game built from the ground up with 50,000+ lines of clean, modular TypeScript/JavaScript and Python code.

---

## 📦 Dependencies & Installation

This project includes multi-ecosystem support with complete dependency manifests and lockfiles:

- **Node / npm**: `package.json` and `package-lock.json`
- **Python / Poetry**: `pyproject.toml` and `poetry.lock`
- **Python / Pip**: `requirements.txt`
- **GNU Make**: `Makefile`
- **Docker**: `Dockerfile` and `docker-compose.yml`

### Option 1: Python Standard Setup (Zero External Dependencies)
```bash
# Clone the repository
git clone https://github.com/Kusuma-Podili/Treasure-Hunt-Quest.git
cd Treasure-Hunt-Quest

# Run automated tests (1,270 tests)
python main.py test

# Start the game server
python main.py
```

### Option 2: Node / npm Setup
```bash
npm install
npm test
npm start
```

### Option 3: Poetry Setup
```bash
poetry install
poetry run pytest
poetry run treasure-hunt
```

### Option 4: Docker / Docker Compose
```bash
# Build and start via Docker Compose
docker compose up -d
```
Navigate to `http://localhost:8000` in your web browser.

---

## 🌟 Key Features

- **Core Engine & Renderers (`src/engine/`)**
  - High-performance 2D/3D Vector Mathematics (`Vector2D`, `Vector3D`) and Affine Transformation Matrices (`Matrix2D`).
  - Spatial Partitioning (`Quadtree`, `SpatialHashGrid`, `BVHTree`).
  - Dual-mode Top-down and 2.5D Isometric Renderers with dynamic camera damping and screen shake.
  - Particle Emitter Engine, Dynamic 2D Lighting, and Tile-based Fog-of-War.
  - Fixed-timestep Game Loop, Touch/Mouse/Keyboard Input Manager, and Event Bus.

- **Procedural Generation Suite (`src/world/`)**
  - 6 Graph-based Maze Algorithms: Randomized Kruskal's, Prim's, Recursive Backtracker, Wilson's, Eller's, Aldous-Broder.
  - Dungeon Generators: Binary Space Partitioning (BSP) Room Layouts, Cellular Automata Caves, Drunkard's Walk.
  - Whittaker Biome Climate Matrix (Ancient Crypt, Sunken Pyramid, Abyssal Galleon).
  - Dead-end Treasure Placer, Trap Threat Matrix, and BFS/DFS Path Reachability Validator.

- **ECS, RPG Layer, Inventory & AI (`src/gameplay/`)**
  - High-Performance Entity Component System (`ECSRegistry`, Systems, Component pools).
  - 150+ Item Catalog with Rarity Tiers and Loot Drop Tables.
  - Grid-based Weight/Slot Inventory System.
  - RPG Character Stats, Status Effects (Poison, Haste, Night Vision), and Ancient Relic Powers.
  - High-Speed A* Grid Pathfinding, Field-of-View sensory casting, and Monster AI Behavior Trees.
  - Branching Dialogue Graph Engine & Quest Tracker.

- **Puzzle Matrix & Level Editor (`src/puzzles/`, `src/editor/`)**
  - Cryptographic Ciphers: Caesar Wheel, Vigenère Tableau, Polybius Square, Atbash Mirror.
  - Interactive Mini-Games: Sliding Tile Lockbox with Solvability Parity Checker, Laser Mirror Optical Reflection, Interconnected Gear Dials, Arithmetic Runes, Logic Circuits, Sequence Memory Recall, Water Jug Puzzle.
  - 50+ Archaeological & Ancient Lore Crypt Riddles.
  - Visual Level Tilemap Editor with Brush/Fill/Eraser tools, Entity Placer, JSON Serializers, and UI Toolbar.

- **Audio, Campaigns & Telemetry (`src/audio/`, `src/campaign/`, `src/ui/`)**
  - Web Audio API Procedural Sound Synthesizer, Dynamic SFX Generator, and Chiptune Music Sequencer.
  - 3 Multi-stage Story Campaigns: *The Forgotten Crypt of Eldoria*, *The Sunken Sand Pyramid*, *The Abyssal Galleon*.
  - Lore Codex, Monster Bestiary & Archaeological entries.
  - Game HUD, Minimap Radar, Inventory View, Puzzle Modals, Leaderboards, and Local Python Server.

---

## 🔀 Pull Request History

| PR # | Branch | Title | Status | LOC Added |
| :--- | :--- | :--- | :--- | :--- |
| **[#1](https://github.com/Kusuma-Podili/Treasure-Hunt-Quest/pull/1)** | `feat/engine-and-math-core` | `feat(engine): Core Engine, Math Foundation, Spatial Indexing & Renderers` | 🟣 Merged | ~11,154 LOC |
| **[#2](https://github.com/Kusuma-Podili/Treasure-Hunt-Quest/pull/2)** | `feat/procedural-world-and-mazes` | `feat(world): Procedural Generation Suite, Mazes, Dungeons & Biomes` | 🟣 Merged | ~9,952 LOC |
| **[#3](https://github.com/Kusuma-Podili/Treasure-Hunt-Quest/pull/3)** | `feat/ecs-gameplay-and-rpg` | `feat(gameplay): Entity Component System (ECS), RPG Layer, Items & AI` | 🟣 Merged | ~9,912 LOC |
| **[#4](https://github.com/Kusuma-Podili/Treasure-Hunt-Quest/pull/4)** | `feat/puzzles-and-level-editor` | `feat(puzzles): Puzzle Matrix, Ciphers, Mini-Games & Visual Level Editor` | 🟣 Merged | ~9,728 LOC |
| **[#5](https://github.com/Kusuma-Podili/Treasure-Hunt-Quest/pull/5)** | `feat/audio-campaign-and-tests` | `feat(campaign): Audio Synthesizer, 3 Story Campaigns, UI HUD & 5 Test Suites` | 🟣 Merged | ~9,714 LOC |

---

## 🧪 Automated Testing

The project includes **5 distinct automated test suites** covering **1,270 test cases**:

```bash
# Run all automated test suites
python tests/test_runner.py
# or
npm test
# or
make test
```

---

## 📜 License
This project is open-source and available under the [MIT License](LICENSE).
