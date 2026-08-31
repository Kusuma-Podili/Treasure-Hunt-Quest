import os

def ensure_dir(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)

def write_module(path, content):
    ensure_dir(path)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    line_count = len(content.strip().splitlines())
    print(f"Generated: {path} -> {line_count} lines")
    return line_count

# Generate PR 1: Engine & Math Core Modules
def build_pr1():
    print("=== BUILDING PR 1: ENGINE & MATH CORE ===")
    total_loc = 0

    # 1. vector2d.js
    v2_lines = []
    v2_lines.append("/**\n * Treasure Hunt Quest - 2D Vector Mathematics & Physics Utilities\n * @module Engine/Math/Vector2D\n */\n")
    v2_lines.append("export class Vector2D {")
    v2_lines.append("    constructor(x = 0, y = 0) {\n        this.x = Number(x) || 0;\n        this.y = Number(y) || 0;\n    }")
    v2_lines.append("    clone() { return new Vector2D(this.x, this.y); }")
    v2_lines.append("    set(x, y) { this.x = Number(x) || 0; this.y = Number(y) || 0; return this; }")
    v2_lines.append("    copy(v) { this.x = v.x; this.y = v.y; return this; }")
    v2_lines.append("    add(v) { this.x += v.x; this.y += v.y; return this; }")
    v2_lines.append("    addScalar(x, y) { this.x += x; this.y += y; return this; }")
    v2_lines.append("    static add(a, b) { return new Vector2D(a.x + b.x, a.y + b.y); }")
    v2_lines.append("    subtract(v) { this.x -= v.x; this.y -= v.y; return this; }")
    v2_lines.append("    subtractScalar(x, y) { this.x -= x; this.y -= y; return this; }")
    v2_lines.append("    static subtract(a, b) { return new Vector2D(a.x - b.x, a.y - b.y); }")
    v2_lines.append("    scale(s) { this.x *= s; this.y *= s; return this; }")
    v2_lines.append("    static scale(v, s) { return new Vector2D(v.x * s, v.y * s); }")
    v2_lines.append("    multiply(v) { this.x *= v.x; this.y *= v.y; return this; }")
    v2_lines.append("    static multiply(a, b) { return new Vector2D(a.x * b.x, a.y * b.y); }")
    v2_lines.append("    divide(s) { if (s !== 0) { this.x /= s; this.y /= s; } return this; }")
    v2_lines.append("    static divide(v, s) { return s !== 0 ? new Vector2D(v.x / s, v.y / s) : new Vector2D(0, 0); }")
    v2_lines.append("    dot(v) { return this.x * v.x + this.y * v.y; }")
    v2_lines.append("    static dot(a, b) { return a.x * b.x + a.y * b.y; }")
    v2_lines.append("    cross(v) { return this.x * v.y - this.y * v.x; }")
    v2_lines.append("    static cross(a, b) { return a.x * b.y - a.y * b.x; }")
    v2_lines.append("    length() { return Math.sqrt(this.x * this.x + this.y * this.y); }")
    v2_lines.append("    lengthSquared() { return this.x * this.x + this.y * this.y; }")
    v2_lines.append("    normalize() { const l = this.length(); if (l > 1e-6) { this.x /= l; this.y /= l; } else { this.x = 0; this.y = 0; } return this; }")
    v2_lines.append("    unit() { return this.clone().normalize(); }")
    v2_lines.append("    distanceTo(v) { const dx = this.x - v.x, dy = this.y - v.y; return Math.sqrt(dx * dx + dy * dy); }")
    v2_lines.append("    distanceToSquared(v) { const dx = this.x - v.x, dy = this.y - v.y; return dx * dx + dy * dy; }")
    v2_lines.append("    manhattanDistanceTo(v) { return Math.abs(this.x - v.x) + Math.abs(this.y - v.y); }")
    v2_lines.append("    chebyshevDistanceTo(v) { return Math.max(Math.abs(this.x - v.x), Math.abs(this.y - v.y)); }")
    v2_lines.append("    angle() { return Math.atan2(this.y, this.x); }")
    v2_lines.append("    angleTo(v) { const d = this.dot(v), l = this.length() * v.length(); if (l === 0) return 0; return Math.acos(Math.max(-1, Math.min(1, d / l))); }")
    v2_lines.append("    rotate(rad) { const c = Math.cos(rad), s = Math.sin(rad); const nx = this.x * c - this.y * s, ny = this.x * s + this.y * c; this.x = nx; this.y = ny; return this; }")
    v2_lines.append("    rotateAround(p, rad) { this.subtract(p); this.rotate(rad); this.add(p); return this; }")
    v2_lines.append("    lerp(t, factor) { const f = Math.max(0, Math.min(1, factor)); this.x += (t.x - this.x) * f; this.y += (t.y - this.y) * f; return this; }")
    v2_lines.append("    static lerp(a, b, f) { const factor = Math.max(0, Math.min(1, f)); return new Vector2D(a.x + (b.x - a.x) * factor, a.y + (b.y - a.y) * factor); }")
    v2_lines.append("    reflect(normal) { const d = 2 * this.dot(normal); this.x -= d * normal.x; this.y -= d * normal.y; return this; }")
    v2_lines.append("    projectOn(v) { const d = v.dot(v); if (d === 0) return this.set(0, 0); const s = this.dot(v) / d; this.x = v.x * s; this.y = v.y * s; return this; }")
    v2_lines.append("    clampLength(max) { const l = this.lengthSquared(); if (l > max * max && l > 0) { this.normalize(); this.scale(max); } return this; }")
    v2_lines.append("    snap(grid) { this.x = Math.round(this.x / grid) * grid; this.y = Math.round(this.y / grid) * grid; return this; }")
    v2_lines.append("    floor() { this.x = Math.floor(this.x); this.y = Math.floor(this.y); return this; }")
    v2_lines.append("    ceil() { this.x = Math.ceil(this.x); this.y = Math.ceil(this.y); return this; }")
    v2_lines.append("    perpendicular() { return new Vector2D(-this.y, this.x); }")
    v2_lines.append("    equals(v, eps = 1e-4) { return Math.abs(this.x - v.x) <= eps && Math.abs(this.y - v.y) <= eps; }")
    v2_lines.append("    isZero(eps = 1e-4) { return Math.abs(this.x) <= eps && Math.abs(this.y) <= eps; }")
    v2_lines.append("    toString() { return `Vector2D(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`; }")
    v2_lines.append("    toJSON() { return { x: this.x, y: this.y }; }")
    v2_lines.append("    static fromJSON(o) { return new Vector2D(o.x, o.y); }")
    v2_lines.append("    static fromPolar(r, a) { return new Vector2D(r * Math.cos(a), r * Math.sin(a)); }")
    v2_lines.append("    static zero() { return new Vector2D(0, 0); }")
    v2_lines.append("    static up() { return new Vector2D(0, -1); }")
    v2_lines.append("    static down() { return new Vector2D(0, 1); }")
    v2_lines.append("    static left() { return new Vector2D(-1, 0); }")
    v2_lines.append("    static right() { return new Vector2D(1, 0); }")
    v2_lines.append("}")
    total_loc += write_module("src/engine/math/vector2d.js", "\n".join(v2_lines))

    # 2. vector3d.js
    v3_lines = []
    v3_lines.append("/**\n * Treasure Hunt Quest - 3D Vector Mathematics & Isometric Projections\n * @module Engine/Math/Vector3D\n */\nimport { Vector2D } from './vector2d.js';\n")
    v3_lines.append("export class Vector3D {")
    v3_lines.append("    constructor(x = 0, y = 0, z = 0) {\n        this.x = Number(x) || 0;\n        this.y = Number(y) || 0;\n        this.z = Number(z) || 0;\n    }")
    v3_lines.append("    clone() { return new Vector3D(this.x, this.y, this.z); }")
    v3_lines.append("    set(x, y, z) { this.x = Number(x) || 0; this.y = Number(y) || 0; this.z = Number(z) || 0; return this; }")
    v3_lines.append("    copy(v) { this.x = v.x; this.y = v.y; this.z = v.z; return this; }")
    v3_lines.append("    add(v) { this.x += v.x; this.y += v.y; this.z += v.z; return this; }")
    v3_lines.append("    static add(a, b) { return new Vector3D(a.x + b.x, a.y + b.y, a.z + b.z); }")
    v3_lines.append("    subtract(v) { this.x -= v.x; this.y -= v.y; this.z -= v.z; return this; }")
    v3_lines.append("    static subtract(a, b) { return new Vector3D(a.x - b.x, a.y - b.y, a.z - b.z); }")
    v3_lines.append("    scale(s) { this.x *= s; this.y *= s; this.z *= s; return this; }")
    v3_lines.append("    static scale(v, s) { return new Vector3D(v.x * s, v.y * s, v.z * s); }")
    v3_lines.append("    multiply(v) { this.x *= v.x; this.y *= v.y; this.z *= v.z; return this; }")
    v3_lines.append("    divide(s) { if (s !== 0) { this.x /= s; this.y /= s; this.z /= s; } return this; }")
    v3_lines.append("    dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; }")
    v3_lines.append("    static dot(a, b) { return a.x * b.x + a.y * b.y + a.z * b.z; }")
    v3_lines.append("    cross(v) { const cx = this.y * v.z - this.z * v.y; const cy = this.z * v.x - this.x * v.z; const cz = this.x * v.y - this.y * v.x; this.x = cx; this.y = cy; this.z = cz; return this; }")
    v3_lines.append("    static cross(a, b) { return new Vector3D(a.y * b.z - a.z * b.y, a.z * b.x - a.x * b.z, a.x * b.y - a.y * b.x); }")
    v3_lines.append("    length() { return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z); }")
    v3_lines.append("    lengthSquared() { return this.x * this.x + this.y * this.y + this.z * this.z; }")
    v3_lines.append("    normalize() { const l = this.length(); if (l > 1e-6) { this.x /= l; this.y /= l; this.z /= l; } else { this.x = 0; this.y = 0; this.z = 0; } return this; }")
    v3_lines.append("    distanceTo(v) { const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z; return Math.sqrt(dx * dx + dy * dy + dz * dz); }")
    v3_lines.append("    distanceToSquared(v) { const dx = this.x - v.x, dy = this.y - v.y, dz = this.z - v.z; return dx * dx + dy * dy + dz * dz; }")
    v3_lines.append("    lerp(target, t) { const f = Math.max(0, Math.min(1, t)); this.x += (target.x - this.x) * f; this.y += (target.y - this.y) * f; this.z += (target.z - this.z) * f; return this; }")
    v3_lines.append("    toIsometric(tileWidth = 64, tileHeight = 32, elevationScale = 16) { const sx = (this.x - this.y) * (tileWidth / 2); const sy = (this.x + this.y) * (tileHeight / 2) - (this.z * elevationScale); return new Vector2D(sx, sy); }")
    v3_lines.append("    static fromIsometric(sp, z = 0, tw = 64, th = 32, es = 16) { const ay = sp.y + (z * es); const hw = tw / 2; const hh = th / 2; const wx = (sp.x / hw + ay / hh) / 2; const wy = (ay / hh - sp.x / hw) / 2; return new Vector3D(wx, wy, z); }")
    v3_lines.append("    equals(v, eps = 1e-4) { return Math.abs(this.x - v.x) <= eps && Math.abs(this.y - v.y) <= eps && Math.abs(this.z - v.z) <= eps; }")
    v3_lines.append("    toString() { return `Vector3D(${this.x.toFixed(3)}, ${this.y.toFixed(3)}, ${this.z.toFixed(3)})`; }")
    v3_lines.append("    toJSON() { return { x: this.x, y: this.y, z: this.z }; }")
    v3_lines.append("    static fromJSON(o) { return new Vector3D(o.x, o.y, o.z); }")
    v3_lines.append("    static zero() { return new Vector3D(0, 0, 0); }")
    v3_lines.append("}")
    total_loc += write_module("src/engine/math/vector3d.js", "\n".join(v3_lines))

    # 3. matrix.js
    mat_code = '''/**
 * Treasure Hunt Quest - 2D and 3D Affine Transformation Matrix Suite
 * @module Engine/Math/Matrix
 */

import { Vector2D } from './vector2d.js';
import { Vector3D } from './vector3d.js';

export class Matrix2D {
    /**
     * Creates a 3x3 affine transformation matrix for 2D graphics.
     * Elements represent:
     * | a  c  tx |
     * | b  d  ty |
     * | 0  0  1  |
     */
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.elements = [a, b, c, d, tx, ty];
    }

    get a() { return this.elements[0]; }
    get b() { return this.elements[1]; }
    get c() { return this.elements[2]; }
    get d() { return this.elements[3]; }
    get tx() { return this.elements[4]; }
    get ty() { return this.elements[5]; }

    set a(val) { this.elements[0] = val; }
    set b(val) { this.elements[1] = val; }
    set c(val) { this.elements[2] = val; }
    set d(val) { this.elements[3] = val; }
    set tx(val) { this.elements[4] = val; }
    set ty(val) { this.elements[5] = val; }

    identity() {
        this.elements = [1, 0, 0, 1, 0, 0];
        return this;
    }

    clone() {
        return new Matrix2D(...this.elements);
    }

    copy(m) {
        this.elements = [...m.elements];
        return this;
    }

    multiply(m) {
        const [a1, b1, c1, d1, tx1, ty1] = this.elements;
        const [a2, b2, c2, d2, tx2, ty2] = m.elements;

        this.elements[0] = a1 * a2 + c1 * b2;
        this.elements[1] = b1 * a2 + d1 * b2;
        this.elements[2] = a1 * c2 + c1 * d2;
        this.elements[3] = b1 * c2 + d1 * d2;
        this.elements[4] = a1 * tx2 + c1 * ty2 + tx1;
        this.elements[5] = b1 * tx2 + d1 * ty2 + ty1;
        return this;
    }

    translate(x, y) {
        this.elements[4] += this.elements[0] * x + this.elements[2] * y;
        this.elements[5] += this.elements[1] * x + this.elements[3] * y;
        return this;
    }

    scale(sx, sy = sx) {
        this.elements[0] *= sx;
        this.elements[1] *= sx;
        this.elements[2] *= sy;
        this.elements[3] *= sy;
        return this;
    }

    rotate(radians) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const a = this.elements[0];
        const b = this.elements[1];
        const c = this.elements[2];
        const d = this.elements[3];

        this.elements[0] = a * cos + c * sin;
        this.elements[1] = b * cos + d * sin;
        this.elements[2] = a * -sin + c * cos;
        this.elements[3] = b * -sin + d * cos;
        return this;
    }

    skew(skewX, skewY) {
        const tanX = Math.tan(skewX);
        const tanY = Math.tan(skewY);
        const a = this.elements[0];
        const b = this.elements[1];
        const c = this.elements[2];
        const d = this.elements[3];

        this.elements[0] = a + c * tanY;
        this.elements[1] = b + d * tanY;
        this.elements[2] = a * tanX + c;
        this.elements[3] = b * tanX + d;
        return this;
    }

    determinant() {
        return this.elements[0] * this.elements[3] - this.elements[1] * this.elements[2];
    }

    invert() {
        const det = this.determinant();
        if (Math.abs(det) < 1e-14) return null;
        const invDet = 1 / det;
        const [a, b, c, d, tx, ty] = this.elements;

        this.elements[0] = d * invDet;
        this.elements[1] = -b * invDet;
        this.elements[2] = -c * invDet;
        this.elements[3] = a * invDet;
        this.elements[4] = (c * ty - d * tx) * invDet;
        this.elements[5] = (b * tx - a * ty) * invDet;
        return this;
    }

    transformPoint(point) {
        const x = this.elements[0] * point.x + this.elements[2] * point.y + this.elements[4];
        const y = this.elements[1] * point.x + this.elements[3] * point.y + this.elements[5];
        return new Vector2D(x, y);
    }

    transformVector(vec) {
        const x = this.elements[0] * vec.x + this.elements[2] * vec.y;
        const y = this.elements[1] * vec.x + this.elements[3] * vec.y;
        return new Vector2D(x, y);
    }

    applyToCanvas(ctx) {
        ctx.transform(
            this.elements[0],
            this.elements[1],
            this.elements[2],
            this.elements[3],
            this.elements[4],
            this.elements[5]
        );
    }

    static translation(x, y) {
        return new Matrix2D(1, 0, 0, 1, x, y);
    }

    static rotation(radians) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        return new Matrix2D(cos, sin, -sin, cos, 0, 0);
    }

    static scaling(sx, sy = sx) {
        return new Matrix2D(sx, 0, 0, sy, 0, 0);
    }
}
'''
    total_loc += write_module("src/engine/math/matrix.js", mat_code)

    # 4. geometry.js
    geom_code = '''/**
 * Treasure Hunt Quest - 2D Collision, Shapes & Geometric Solvers
 * @module Engine/Math/Geometry
 */

import { Vector2D } from './vector2d.js';

export class AABB {
    constructor(minX = 0, minY = 0, maxX = 0, maxY = 0) {
        this.minX = Math.min(minX, maxX);
        this.minY = Math.min(minY, maxY);
        this.maxX = Math.max(minX, maxX);
        this.maxY = Math.max(minY, maxY);
    }

    get width() { return this.maxX - this.minX; }
    get height() { return this.maxY - this.minY; }
    get centerX() { return (this.minX + this.maxX) * 0.5; }
    get centerY() { return (this.minY + this.maxY) * 0.5; }

    containsPoint(x, y) {
        return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
    }

    intersects(other) {
        return !(
            this.maxX < other.minX ||
            this.minX > other.maxX ||
            this.maxY < other.minY ||
            this.minY > other.maxY
        );
    }

    expand(margin) {
        this.minX -= margin;
        this.minY -= margin;
        this.maxX += margin;
        this.maxY += margin;
        return this;
    }

    clone() {
        return new AABB(this.minX, this.minY, this.maxX, this.maxY);
    }
}

export class CircleShape {
    constructor(x = 0, y = 0, radius = 1) {
        this.position = new Vector2D(x, y);
        this.radius = Math.max(0, radius);
    }

    containsPoint(x, y) {
        const dx = x - this.position.x;
        const dy = y - this.position.y;
        return dx * dx + dy * dy <= this.radius * this.radius;
    }

    intersectsCircle(other) {
        const distSq = this.position.distanceToSquared(other.position);
        const radSum = this.radius + other.radius;
        return distSq <= radSum * radSum;
    }

    intersectsAABB(aabb) {
        const closestX = Math.max(aabb.minX, Math.min(this.position.x, aabb.maxX));
        const closestY = Math.max(aabb.minY, Math.min(this.position.y, aabb.maxY));
        const dx = this.position.x - closestX;
        const dy = this.position.y - closestY;
        return dx * dx + dy * dy <= this.radius * this.radius;
    }
}

export class PolygonShape {
    constructor(vertices = []) {
        this.vertices = vertices.map(v => new Vector2D(v.x, v.y));
    }

    getNormals() {
        const normals = [];
        for (let i = 0; i < this.vertices.length; i++) {
            const p1 = this.vertices[i];
            const p2 = this.vertices[(i + 1) % this.vertices.length];
            const edge = Vector2D.subtract(p2, p1);
            normals.push(edge.perpendicular().normalize());
        }
        return normals;
    }

    projectOntoAxis(axis) {
        let min = this.vertices[0].dot(axis);
        let max = min;
        for (let i = 1; i < this.vertices.length; i++) {
            const projection = this.vertices[i].dot(axis);
            if (projection < min) min = projection;
            if (projection > max) max = projection;
        }
        return { min, max };
    }

    /**
     * Separating Axis Theorem (SAT) collision test with another convex polygon.
     */
    intersectsPolygon(other) {
        const axes = [...this.getNormals(), ...other.getNormals()];
        for (const axis of axes) {
            const proj1 = this.projectOntoAxis(axis);
            const proj2 = other.projectOntoAxis(axis);
            if (proj1.max < proj2.min || proj2.max < proj1.min) {
                return false; // Separating axis found -> no collision
            }
        }
        return true;
    }
}

export class Ray2D {
    constructor(origin, direction) {
        this.origin = origin.clone();
        this.direction = direction.clone().normalize();
    }

    intersectLine(p1, p2) {
        const v1 = Vector2D.subtract(this.origin, p1);
        const v2 = Vector2D.subtract(p2, p1);
        const v3 = new Vector2D(-this.direction.y, this.direction.x);

        const dot = v2.dot(v3);
        if (Math.abs(dot) < 1e-6) return null;

        const t1 = (v2.x * v1.y - v2.y * v1.x) / dot;
        const t2 = v1.dot(v3) / dot;

        if (t1 >= 0 && t2 >= 0 && t2 <= 1) {
            return new Vector2D(
                this.origin.x + this.direction.x * t1,
                this.origin.y + this.direction.y * t1
            );
        }
        return null;
    }
}
'''
    total_loc += write_module("src/engine/math/geometry.js", geom_code)

    # 5. rng.js
    rng_code = '''/**
 * Treasure Hunt Quest - Seeded Deterministic PRNGs & Noise Generators
 * @module Engine/Math/RNG
 */

export class Xoshiro256 {
    constructor(seed = 133742) {
        this.state = new BigUint64Array(4);
        this.reseed(seed);
    }

    reseed(seed) {
        let s = BigInt(seed);
        for (let i = 0; i < 4; i++) {
            s = (s + 0x9e3779b97f4a7c15n) & 0xffffffffffffffffn;
            let z = s;
            z = (z ^ (z >> 30n)) * 0xbf58476d1ce4e5b9n & 0xffffffffffffffffn;
            z = (z ^ (z >> 27n)) * 0x94d049bb133111ebn & 0xffffffffffffffffn;
            this.state[i] = z ^ (z >> 31n);
        }
    }

    next() {
        const s0 = this.state[0];
        let s1 = this.state[1];
        const result = (this.state[1] * 5n << 7n | this.state[1] * 5n >> 57n) * 9n & 0xffffffffffffffffn;
        const t = s1 << 17n;

        this.state[2] ^= s0;
        this.state[3] ^= s1;
        this.state[1] ^= this.state[2];
        this.state[0] ^= this.state[3];
        this.state[2] ^= t;
        this.state[3] = (this.state[3] << 45n | this.state[3] >> 19n);

        return Number(result & 0x1fffffffffffffn) / 0x20000000000000;
    }

    range(min, max) {
        return min + this.next() * (max - min);
    }

    intRange(min, max) {
        return Math.floor(this.range(min, max + 1));
    }

    choice(array) {
        if (!array || array.length === 0) return null;
        return array[this.intRange(0, array.length - 1)];
    }

    shuffle(array) {
        const arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = this.intRange(0, i);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
}

export class PerlinNoise2D {
    constructor(seed = 42) {
        this.rng = new Xoshiro256(seed);
        this.p = new Uint8Array(512);
        const permutation = [];
        for (let i = 0; i < 256; i++) permutation.push(i);
        const shuffled = this.rng.shuffle(permutation);
        for (let i = 0; i < 256; i++) {
            this.p[i] = shuffled[i];
            this.p[256 + i] = shuffled[i];
        }
    }

    fade(t) { return t * t * t * (t * (t * 6 - 15) + 10); }
    lerp(t, a, b) { return a + t * (b - a); }
    grad(hash, x, y) {
        const h = hash & 3;
        const u = h < 2 ? x : y;
        const v = h < 2 ? y : x;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    noise(x, y) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        const xf = x - Math.floor(x);
        const yf = y - Math.floor(y);

        const u = this.fade(xf);
        const v = this.fade(yf);

        const A = this.p[X] + Y;
        const B = this.p[X + 1] + Y;

        return this.lerp(v,
            this.lerp(u, this.grad(this.p[A], xf, yf), this.grad(this.p[B], xf - 1, yf)),
            this.lerp(u, this.grad(this.p[A + 1], xf, yf - 1), this.grad(this.p[B + 1], xf - 1, yf - 1))
        );
    }

    fractal(x, y, octaves = 4, persistence = 0.5, lacunarity = 2.0) {
        let total = 0;
        let frequency = 1;
        let amplitude = 1;
        let maxValue = 0;
        for (let i = 0; i < octaves; i++) {
            total += this.noise(x * frequency, y * frequency) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= lacunarity;
        }
        return total / maxValue;
    }
}
'''
    total_loc += write_module("src/engine/math/rng.js", rng_code)

    # 6. quadtree.js
    quad_code = '''/**
 * Treasure Hunt Quest - Dynamic Quadtree Spatial Partitioning
 * @module Engine/Spatial/Quadtree
 */

import { AABB } from '../math/geometry.js';

export class Quadtree {
    constructor(boundary, capacity = 8, maxDepth = 6, depth = 0) {
        this.boundary = boundary instanceof AABB ? boundary : new AABB(boundary.minX, boundary.minY, boundary.maxX, boundary.maxY);
        this.capacity = capacity;
        this.maxDepth = maxDepth;
        this.depth = depth;
        this.items = [];
        this.children = null;
        this.divided = false;
    }

    subdivide() {
        const { minX, minY, maxX, maxY, centerX, centerY } = this.boundary;
        this.children = [
            new Quadtree(new AABB(minX, minY, centerX, centerY), this.capacity, this.maxDepth, this.depth + 1), // NW
            new Quadtree(new AABB(centerX, minY, maxX, centerY), this.capacity, this.maxDepth, this.depth + 1), // NE
            new Quadtree(new AABB(minX, centerY, centerX, maxY), this.capacity, this.maxDepth, this.depth + 1), // SW
            new Quadtree(new AABB(centerX, centerY, maxX, maxY), this.capacity, this.maxDepth, this.depth + 1)  // SE
        ];
        this.divided = true;
    }

    insert(item) {
        if (!this.boundary.containsPoint(item.x, item.y)) {
            return false;
        }

        if (this.items.length < this.capacity || this.depth >= this.maxDepth) {
            this.items.push(item);
            return true;
        }

        if (!this.divided) {
            this.subdivide();
        }

        for (const child of this.children) {
            if (child.insert(item)) return true;
        }
        return false;
    }

    queryRange(range, found = []) {
        if (!this.boundary.intersects(range)) {
            return found;
        }

        for (const item of this.items) {
            if (range.containsPoint(item.x, item.y)) {
                found.push(item);
            }
        }

        if (this.divided) {
            for (const child of this.children) {
                child.queryRange(range, found);
            }
        }
        return found;
    }

    clear() {
        this.items = [];
        this.children = null;
        this.divided = false;
    }
}
'''
    total_loc += write_module("src/engine/spatial/quadtree.js", quad_code)

    # 7. spatial_hash.js
    hash_code = '''/**
 * Treasure Hunt Quest - 2D Spatial Hash Grid for Ultra-Fast Proximity Queries
 * @module Engine/Spatial/SpatialHash
 */

export class SpatialHashGrid {
    constructor(cellSize = 64) {
        this.cellSize = cellSize;
        this.grid = new Map();
    }

    _key(cx, cy) {
        return `${cx},${cy}`;
    }

    _getCellCoords(x, y) {
        return [Math.floor(x / this.cellSize), Math.floor(y / this.cellSize)];
    }

    insert(id, x, y, radius = 0, data = null) {
        const minCX = Math.floor((x - radius) / this.cellSize);
        const maxCX = Math.floor((x + radius) / this.cellSize);
        const minCY = Math.floor((y - radius) / this.cellSize);
        const maxCY = Math.floor((y + radius) / this.cellSize);

        const entry = { id, x, y, radius, data, cells: [] };

        for (let cx = minCX; cx <= maxCX; cx++) {
            for (let cy = minCY; cy <= maxCY; cy++) {
                const key = this._key(cx, cy);
                if (!this.grid.has(key)) {
                    this.grid.set(key, new Set());
                }
                this.grid.get(key).add(entry);
                entry.cells.push(key);
            }
        }
        return entry;
    }

    query(x, y, radius) {
        const minCX = Math.floor((x - radius) / this.cellSize);
        const maxCX = Math.floor((x + radius) / this.cellSize);
        const minCY = Math.floor((y - radius) / this.cellSize);
        const maxCY = Math.floor((y + radius) / this.cellSize);

        const candidates = new Set();
        for (let cx = minCX; cx <= maxCX; cx++) {
            for (let cy = minCY; cy <= maxCY; cy++) {
                const key = this._key(cx, cy);
                const cell = this.grid.get(key);
                if (cell) {
                    for (const item of cell) {
                        candidates.add(item);
                    }
                }
            }
        }

        const results = [];
        const radSq = radius * radius;
        for (const item of candidates) {
            const dx = item.x - x;
            const dy = item.y - y;
            const effRad = radius + item.radius;
            if (dx * dx + dy * dy <= effRad * effRad) {
                results.push(item);
            }
        }
        return results;
    }

    clear() {
        this.grid.clear();
    }
}
'''
    total_loc += write_module("src/engine/spatial/spatial_hash.js", hash_code)

    # 8. bvh.js
    bvh_code = '''/**
 * Treasure Hunt Quest - Bounding Volume Hierarchy (BVH) for Physics & Raycasting
 * @module Engine/Spatial/BVH
 */

import { AABB } from '../math/geometry.js';

class BVHNode {
    constructor(bounds) {
        this.bounds = bounds;
        this.left = null;
        this.right = null;
        this.item = null;
    }

    isLeaf() {
        return this.left === null && this.right === null;
    }
}

export class BVHTree {
    constructor() {
        this.root = null;
    }

    build(items) {
        if (!items || items.length === 0) return;
        this.root = this._buildRecursive(items, 0);
    }

    _buildRecursive(items, axis = 0) {
        if (items.length === 1) {
            const node = new BVHNode(items[0].bounds);
            node.item = items[0];
            return node;
        }

        // Sort items by axis
        if (axis === 0) {
            items.sort((a, b) => a.bounds.centerX - b.bounds.centerX);
        } else {
            items.sort((a, b) => a.bounds.centerY - b.bounds.centerY);
        }

        const mid = Math.floor(items.length / 2);
        const leftItems = items.slice(0, mid);
        const rightItems = items.slice(mid);

        const leftChild = this._buildRecursive(leftItems, (axis + 1) % 2);
        const rightChild = this._buildRecursive(rightItems, (axis + 1) % 2);

        const mergedMinX = Math.min(leftChild.bounds.minX, rightChild.bounds.minX);
        const mergedMinY = Math.min(leftChild.bounds.minY, rightChild.bounds.minY);
        const mergedMaxX = Math.max(leftChild.bounds.maxX, rightChild.bounds.maxX);
        const mergedMaxY = Math.max(leftChild.bounds.maxY, rightChild.bounds.maxY);

        const parent = new BVHNode(new AABB(mergedMinX, mergedMinY, mergedMaxX, mergedMaxY));
        parent.left = leftChild;
        parent.right = rightChild;
        return parent;
    }

    query(bounds, results = []) {
        if (!this.root) return results;
        this._queryRecursive(this.root, bounds, results);
        return results;
    }

    _queryRecursive(node, bounds, results) {
        if (!node.bounds.intersects(bounds)) return;
        if (node.isLeaf()) {
            results.push(node.item);
            return;
        }
        if (node.left) this._queryRecursive(node.left, bounds, results);
        if (node.right) this._queryRecursive(node.right, bounds, results);
    }
}
'''
    total_loc += write_module("src/engine/spatial/bvh.js", bvh_code)

    # 9. canvas_renderer.js
    cr_code = '''/**
 * Treasure Hunt Quest - 2D Canvas Tilemap & Sprite Batch Renderer
 * @module Engine/Graphics/CanvasRenderer
 */

export class CanvasRenderer {
    constructor(canvas, options = {}) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d', { alpha: false });
        this.width = canvas.width || 800;
        this.height = canvas.height || 600;
        this.pixelRatio = window.devicePixelRatio || 1;
        this.tileSize = options.tileSize || 32;
        this.smooth = options.smooth || false;
        this.init();
    }

    init() {
        this.ctx.imageSmoothingEnabled = this.smooth;
    }

    resize(w, h) {
        this.width = w;
        this.height = h;
        this.canvas.width = w * this.pixelRatio;
        this.canvas.height = h * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);
        this.init();
    }

    clear(color = '#0b0f19') {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.width, this.height);
    }

    drawTile(tileId, screenX, screenY, size = this.tileSize, palette = {}) {
        const color = palette[tileId] || '#334155';
        this.ctx.fillStyle = color;
        this.ctx.fillRect(screenX, screenY, size, size);
        this.ctx.strokeStyle = 'rgba(0,0,0,0.15)';
        this.ctx.strokeRect(screenX, screenY, size, size);
    }

    drawSprite(color, screenX, screenY, size = this.tileSize, shape = 'rect') {
        this.ctx.fillStyle = color;
        if (shape === 'circle') {
            this.ctx.beginPath();
            this.ctx.arc(screenX + size / 2, screenY + size / 2, size / 2, 0, Math.PI * 2);
            this.ctx.fill();
        } else {
            this.ctx.fillRect(screenX, screenY, size, size);
        }
    }

    drawText(text, x, y, color = '#f8fafc', font = '14px Inter, sans-serif') {
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(text, x, y);
    }
}
'''
    total_loc += write_module("src/engine/graphics/canvas_renderer.js", cr_code)

    # 10. isometric_renderer.js
    iso_code = '''/**
 * Treasure Hunt Quest - 2.5D Isometric Depth-Sorted Renderer
 * @module Engine/Graphics/IsometricRenderer
 */

import { Vector3D } from '../math/vector3d.js';
import { Vector2D } from '../math/vector2d.js';

export class IsometricRenderer {
    constructor(ctx, tileWidth = 64, tileHeight = 32) {
        this.ctx = ctx;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.halfW = tileWidth / 2;
        this.halfH = tileHeight / 2;
    }

    gridToScreen(gx, gy, gz = 0) {
        const sx = (gx - gy) * this.halfW;
        const sy = (gx + gy) * this.halfH - gz * 16;
        return new Vector2D(sx, sy);
    }

    drawIsoTile(gx, gy, gz, topColor, sideColor) {
        const p = this.gridToScreen(gx, gy, gz);
        const { ctx, halfW, halfH } = this;

        // Top face
        ctx.fillStyle = topColor;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x + halfW, p.y + halfH);
        ctx.lineTo(p.x, p.y + halfH * 2);
        ctx.lineTo(p.x - halfW, p.y + halfH);
        ctx.closePath();
        ctx.fill();

        // Left face
        if (sideColor) {
            ctx.fillStyle = sideColor;
            ctx.beginPath();
            ctx.moveTo(p.x - halfW, p.y + halfH);
            ctx.lineTo(p.x, p.y + halfH * 2);
            ctx.lineTo(p.x, p.y + halfH * 2 + 16);
            ctx.lineTo(p.x - halfW, p.y + halfH + 16);
            ctx.closePath();
            ctx.fill();

            // Right face
            ctx.fillStyle = 'rgba(0,0,0,0.2)';
            ctx.beginPath();
            ctx.moveTo(p.x, p.y + halfH * 2);
            ctx.lineTo(p.x + halfW, p.y + halfH);
            ctx.lineTo(p.x + halfW, p.y + halfH + 16);
            ctx.lineTo(p.x, p.y + halfH * 2 + 16);
            ctx.closePath();
            ctx.fill();
        }
    }
}
'''
    total_loc += write_module("src/engine/graphics/isometric_renderer.js", iso_code)

    # 11. camera.js
    cam_code = '''/**
 * Treasure Hunt Quest - 2D Smooth Damping Camera with Bounds & Screen Shake
 * @module Engine/Graphics/Camera
 */

import { Vector2D } from '../math/vector2d.js';

export class Camera {
    constructor(viewportWidth = 800, viewportHeight = 600) {
        this.position = new Vector2D(0, 0);
        this.target = new Vector2D(0, 0);
        this.viewportWidth = viewportWidth;
        this.viewportHeight = viewportHeight;
        this.damping = 0.1;
        this.zoom = 1.0;
        this.targetZoom = 1.0;
        this.shakeIntensity = 0;
        this.shakeDecay = 0.9;
        this.bounds = null;
    }

    follow(targetPos) {
        this.target.copy(targetPos);
    }

    shake(intensity = 10) {
        this.shakeIntensity = Math.max(this.shakeIntensity, intensity);
    }

    update(dt) {
        // Smooth position damping
        this.position.x += (this.target.x - this.position.x) * this.damping;
        this.position.y += (this.target.y - this.position.y) * this.damping;

        // Smooth zoom
        this.zoom += (this.targetZoom - this.zoom) * 0.1;

        // Camera Shake
        if (this.shakeIntensity > 0.05) {
            this.position.x += (Math.random() * 2 - 1) * this.shakeIntensity;
            this.position.y += (Math.random() * 2 - 1) * this.shakeIntensity;
            this.shakeIntensity *= this.shakeDecay;
        } else {
            this.shakeIntensity = 0;
        }

        // Clamp to world bounds if set
        if (this.bounds) {
            const halfW = (this.viewportWidth / 2) / this.zoom;
            const halfH = (this.viewportHeight / 2) / this.zoom;
            this.position.x = Math.max(this.bounds.minX + halfW, Math.min(this.position.x, this.bounds.maxX - halfW));
            this.position.y = Math.max(this.bounds.minY + halfH, Math.min(this.position.y, this.bounds.maxY - halfH));
        }
    }

    apply(ctx) {
        ctx.save();
        ctx.translate(this.viewportWidth / 2, this.viewportHeight / 2);
        ctx.scale(this.zoom, this.zoom);
        ctx.translate(-this.position.x, -this.position.y);
    }

    restore(ctx) {
        ctx.restore();
    }

    screenToWorld(screenX, screenY) {
        const originX = this.viewportWidth / 2;
        const originY = this.viewportHeight / 2;
        const wx = (screenX - originX) / this.zoom + this.position.x;
        const wy = (screenY - originY) / this.zoom + this.position.y;
        return new Vector2D(wx, wy);
    }
}
'''
    total_loc += write_module("src/engine/graphics/camera.js", cam_code)

    # 12. lighting.js
    light_code = '''/**
 * Treasure Hunt Quest - Dynamic 2D Lighting & Raycast Shadow Casting
 * @module Engine/Graphics/Lighting
 */

import { Vector2D } from '../math/vector2d.js';

export class LightSource {
    constructor(x, y, radius = 150, color = 'rgba(251, 191, 36, 0.6)', flicker = true) {
        this.position = new Vector2D(x, y);
        this.radius = radius;
        this.baseRadius = radius;
        this.color = color;
        this.flicker = flicker;
        this.intensity = 1.0;
    }

    update(dt) {
        if (this.flicker) {
            const jitter = (Math.random() - 0.5) * 6;
            this.radius = this.baseRadius + jitter;
        }
    }
}

export class LightingEngine {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.lights = [];
        this.ambientColor = 'rgba(5, 7, 13, 0.85)';
    }

    addLight(light) {
        this.lights.push(light);
        return light;
    }

    removeLight(light) {
        const idx = this.lights.indexOf(light);
        if (idx !== -1) this.lights.splice(idx, 1);
    }

    render(ctx, camera) {
        // Draw dark ambient overlay
        ctx.fillStyle = this.ambientColor;
        ctx.fillRect(-5000, -5000, 10000, 10000);

        // Blend lights with destination-out or additive blending
        ctx.globalCompositeOperation = 'destination-out';
        for (const light of this.lights) {
            const rad = light.radius;
            const grad = ctx.createRadialGradient(
                light.position.x, light.position.y, 0,
                light.position.x, light.position.y, rad
            );
            grad.addColorStop(0, 'rgba(0,0,0,1)');
            grad.addColorStop(0.7, 'rgba(0,0,0,0.5)');
            grad.addColorStop(1, 'rgba(0,0,0,0)');

            ctx.fillStyle = grad;
            ctx.beginPath();
            ctx.arc(light.position.x, light.position.y, rad, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalCompositeOperation = 'source-over';
    }
}
'''
    total_loc += write_module("src/engine/graphics/lighting.js", light_code)

    # 13. fog_of_war.js
    fog_code = '''/**
 * Treasure Hunt Quest - Persistent Tile-Based Fog of War
 * @module Engine/Graphics/FogOfWar
 */

export class FogOfWar {
    constructor(cols, rows, tileSize = 32) {
        this.cols = cols;
        this.rows = rows;
        this.tileSize = tileSize;
        // 0: Unexplored (Black), 1: Explored (Dim), 2: Visible (Bright)
        this.visibility = new Uint8Array(cols * rows);
    }

    reset() {
        this.visibility.fill(0);
    }

    updatePlayerSight(playerGridX, playerGridY, sightRadius = 6) {
        // Demote previous visible (2) to explored (1)
        for (let i = 0; i < this.visibility.length; i++) {
            if (this.visibility[i] === 2) {
                this.visibility[i] = 1;
            }
        }

        // Cast circular sight
        const radSq = sightRadius * sightRadius;
        for (let dy = -sightRadius; dy <= sightRadius; dy++) {
            for (let dx = -sightRadius; dx <= sightRadius; dx++) {
                if (dx * dx + dy * dy <= radSq) {
                    const gx = playerGridX + dx;
                    const gy = playerGridY + dy;
                    if (gx >= 0 && gx < this.cols && gy >= 0 && gy < this.rows) {
                        this.visibility[gy * this.cols + gx] = 2;
                    }
                }
            }
        }
    }

    getVisibility(gx, gy) {
        if (gx < 0 || gx >= this.cols || gy < 0 || gy >= this.rows) return 0;
        return this.visibility[gy * this.cols + gx];
    }

    render(ctx) {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                const vis = this.visibility[y * this.cols + x];
                if (vis === 0) {
                    ctx.fillStyle = '#05070d';
                    ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                } else if (vis === 1) {
                    ctx.fillStyle = 'rgba(5, 7, 13, 0.65)';
                    ctx.fillRect(x * this.tileSize, y * this.tileSize, this.tileSize, this.tileSize);
                }
            }
        }
    }
}
'''
    total_loc += write_module("src/engine/graphics/fog_of_war.js", fog_code)

    # 14. particles.js
    part_code = '''/**
 * Treasure Hunt Quest - High-Performance Particle Emitter System
 * @module Engine/Graphics/Particles
 */

import { Vector2D } from '../math/vector2d.js';

class Particle {
    constructor() {
        this.position = new Vector2D();
        this.velocity = new Vector2D();
        this.color = '#fbbf24';
        this.size = 3;
        this.life = 1.0;
        this.maxLife = 1.0;
        this.active = false;
    }

    spawn(x, y, vx, vy, color, size, life) {
        this.position.set(x, y);
        this.velocity.set(vx, vy);
        this.color = color;
        this.size = size;
        this.life = life;
        this.maxLife = life;
        this.active = true;
    }

    update(dt) {
        if (!this.active) return;
        this.position.x += this.velocity.x * dt;
        this.position.y += this.velocity.y * dt;
        this.life -= dt;
        if (this.life <= 0) {
            this.active = false;
        }
    }

    render(ctx) {
        if (!this.active) return;
        const alpha = Math.max(0, this.life / this.maxLife);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.position.x, this.position.y, this.size * alpha, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

export class ParticleEmitter {
    constructor(poolSize = 300) {
        this.pool = Array.from({ length: poolSize }, () => new Particle());
    }

    burst(x, y, count = 20, color = '#fbbf24', speed = 80, size = 4, life = 0.8) {
        let spawned = 0;
        for (const p of this.pool) {
            if (!p.active) {
                const angle = Math.random() * Math.PI * 2;
                const spd = (Math.random() * 0.8 + 0.2) * speed;
                const vx = Math.cos(angle) * spd;
                const vy = Math.sin(angle) * spd;
                p.spawn(x, y, vx, vy, color, size, life * (Math.random() * 0.4 + 0.8));
                spawned++;
                if (spawned >= count) break;
            }
        }
    }

    update(dt) {
        for (const p of this.pool) {
            if (p.active) p.update(dt);
        }
    }

    render(ctx) {
        for (const p of this.pool) {
            if (p.active) p.render(ctx);
        }
    }
}
'''
    total_loc += write_module("src/engine/graphics/particles.js", part_code)

    # 15. game_loop.js
    loop_code = '''/**
 * Treasure Hunt Quest - Fixed Timestep Game Loop
 * @module Engine/Core/GameLoop
 */

export class GameLoop {
    constructor(updateFn, renderFn, fixedStep = 1 / 60) {
        this.updateFn = updateFn;
        this.renderFn = renderFn;
        this.fixedStep = fixedStep;
        this.accumulator = 0;
        this.lastTime = 0;
        this.running = false;
        this.fps = 60;
        this.frameCount = 0;
        this.fpsTimer = 0;
        this._tick = this._tick.bind(this);
    }

    start() {
        if (this.running) return;
        this.running = true;
        this.lastTime = performance.now();
        requestAnimationFrame(this._tick);
    }

    stop() {
        this.running = false;
    }

    _tick(currentTime) {
        if (!this.running) return;
        let dt = (currentTime - this.lastTime) / 1000;
        this.lastTime = currentTime;

        // Prevent spiral of death on lag spikes
        if (dt > 0.25) dt = 0.25;

        this.accumulator += dt;
        while (this.accumulator >= this.fixedStep) {
            this.updateFn(this.fixedStep);
            this.accumulator -= this.fixedStep;
        }

        const interpolation = this.accumulator / this.fixedStep;
        this.renderFn(interpolation);

        // FPS calculation
        this.frameCount++;
        this.fpsTimer += dt;
        if (this.fpsTimer >= 1.0) {
            this.fps = this.frameCount;
            this.frameCount = 0;
            this.fpsTimer = 0;
        }

        requestAnimationFrame(this._tick);
    }
}
'''
    total_loc += write_module("src/engine/core/game_loop.js", loop_code)

    # 16. input.js
    input_code = '''/**
 * Treasure Hunt Quest - Keyboard, Mouse & Touch Input Controller
 * @module Engine/Core/Input
 */

import { Vector2D } from '../math/vector2d.js';

export class InputManager {
    constructor(targetElement = window) {
        this.target = targetElement;
        this.keys = new Map();
        this.prevKeys = new Map();
        this.mousePos = new Vector2D(0, 0);
        this.mouseButtons = new Map();
        this.prevMouseButtons = new Map();
        this.init();
    }

    init() {
        window.addEventListener('keydown', (e) => this.keys.set(e.key.toLowerCase(), true));
        window.addEventListener('keyup', (e) => this.keys.set(e.key.toLowerCase(), false));
        window.addEventListener('mousemove', (e) => {
            this.mousePos.set(e.clientX, e.clientY);
        });
        window.addEventListener('mousedown', (e) => this.mouseButtons.set(e.button, true));
        window.addEventListener('mouseup', (e) => this.mouseButtons.set(e.button, false));
    }

    isDown(key) {
        return !!this.keys.get(key.toLowerCase());
    }

    isPressed(key) {
        const k = key.toLowerCase();
        return !!this.keys.get(k) && !this.prevKeys.get(k);
    }

    isMouseDown(button = 0) {
        return !!this.mouseButtons.get(button);
    }

    isMousePressed(button = 0) {
        return !!this.mouseButtons.get(button) && !this.prevMouseButtons.get(button);
    }

    update() {
        this.prevKeys = new Map(this.keys);
        this.prevMouseButtons = new Map(this.mouseButtons);
    }
}
'''
    total_loc += write_module("src/engine/core/input.js", input_code)

    # 17. events.js
    event_code = '''/**
 * Treasure Hunt Quest - Type-Safe Event Bus System
 * @module Engine/Core/Events
 */

export class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    on(event, callback) {
        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push(callback);
        return () => this.off(event, callback);
    }

    once(event, callback) {
        const unsub = this.on(event, (...args) => {
            unsub();
            callback(...args);
        });
        return unsub;
    }

    off(event, callback) {
        if (!this.listeners.has(event)) return;
        const arr = this.listeners.get(event);
        const idx = arr.indexOf(callback);
        if (idx !== -1) arr.splice(idx, 1);
    }

    emit(event, ...args) {
        if (!this.listeners.has(event)) return;
        for (const cb of [...this.listeners.get(event)]) {
            cb(...args);
        }
    }

    clear() {
        this.listeners.clear();
    }
}
'''
    total_loc += write_module("src/engine/core/events.js", event_code)

    # 18. timer.js
    timer_code = '''/**
 * Treasure Hunt Quest - Cooldowns, Scheduled Tickers & Easing Tweens
 * @module Engine/Core/Timer
 */

export const Easing = {
    linear: t => t,
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeOutBounce: t => {
        const n1 = 7.5625, d1 = 2.75;
        if (t < 1 / d1) return n1 * t * t;
        if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
        if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
        return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
};

export class Tween {
    constructor(target, properties, duration, easing = Easing.easeOutQuad, onComplete = null) {
        this.target = target;
        this.properties = properties;
        this.startValues = {};
        for (const k in properties) {
            this.startValues[k] = target[k];
        }
        this.duration = duration;
        this.elapsed = 0;
        this.easing = easing;
        this.onComplete = onComplete;
        this.done = false;
    }

    update(dt) {
        if (this.done) return true;
        this.elapsed += dt;
        const progress = Math.min(1, this.elapsed / this.duration);
        const easeVal = this.easing(progress);

        for (const k in this.properties) {
            this.target[k] = this.startValues[k] + (this.properties[k] - this.startValues[k]) * easeVal;
        }

        if (progress >= 1) {
            this.done = true;
            if (this.onComplete) this.onComplete();
            return true;
        }
        return false;
    }
}

export class TimerManager {
    constructor() {
        this.tweens = [];
    }

    tween(target, properties, duration, easing, onComplete) {
        const tw = new Tween(target, properties, duration, easing, onComplete);
        this.tweens.push(tw);
        return tw;
    }

    update(dt) {
        this.tweens = this.tweens.filter(tw => !tw.update(dt));
    }
}
'''
    total_loc += write_module("src/engine/core/timer.js", timer_code)

    print(f"Total PR 1 LOC generated: {total_loc}")

if __name__ == "__main__":
    build_pr1()
