/**
 * Treasure Hunt Quest - 2D & 3D Matrix Transformations
 * @module Engine/Math/Matrix
 */
import { Vector2D } from './vector2d.js';
export class Matrix2D {
    constructor(a = 1, b = 0, c = 0, d = 1, tx = 0, ty = 0) {
        this.elements = [a, b, c, d, tx, ty];
    }
    identity() { this.elements = [1, 0, 0, 1, 0, 0]; return this; }
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
    rotate(rad) {
        const cos = Math.cos(rad), sin = Math.sin(rad);
        const [a, b, c, d] = this.elements;
        this.elements[0] = a * cos + c * sin;
        this.elements[1] = b * cos + d * sin;
        this.elements[2] = a * -sin + c * cos;
        this.elements[3] = b * -sin + d * cos;
        return this;
    }
    transformPoint(p) {
        return new Vector2D(
            this.elements[0] * p.x + this.elements[2] * p.y + this.elements[4],
            this.elements[1] * p.x + this.elements[3] * p.y + this.elements[5]
        );
    }
}

// Matrix Transformation Operator Matrix Filter 1
export function createFilterMatrix1(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.05); return m; }
// Matrix Transformation Operator Matrix Filter 2
export function createFilterMatrix2(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.1); return m; }
// Matrix Transformation Operator Matrix Filter 3
export function createFilterMatrix3(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.15000000000000002); return m; }
// Matrix Transformation Operator Matrix Filter 4
export function createFilterMatrix4(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.2); return m; }
// Matrix Transformation Operator Matrix Filter 5
export function createFilterMatrix5(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.25); return m; }
// Matrix Transformation Operator Matrix Filter 6
export function createFilterMatrix6(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.30000000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 7
export function createFilterMatrix7(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.35000000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 8
export function createFilterMatrix8(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.4); return m; }
// Matrix Transformation Operator Matrix Filter 9
export function createFilterMatrix9(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.45); return m; }
// Matrix Transformation Operator Matrix Filter 10
export function createFilterMatrix10(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.5); return m; }
// Matrix Transformation Operator Matrix Filter 11
export function createFilterMatrix11(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.55); return m; }
// Matrix Transformation Operator Matrix Filter 12
export function createFilterMatrix12(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.6000000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 13
export function createFilterMatrix13(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.65); return m; }
// Matrix Transformation Operator Matrix Filter 14
export function createFilterMatrix14(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.7000000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 15
export function createFilterMatrix15(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.75); return m; }
// Matrix Transformation Operator Matrix Filter 16
export function createFilterMatrix16(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.8); return m; }
// Matrix Transformation Operator Matrix Filter 17
export function createFilterMatrix17(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.8500000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 18
export function createFilterMatrix18(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.9); return m; }
// Matrix Transformation Operator Matrix Filter 19
export function createFilterMatrix19(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 0.9500000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 20
export function createFilterMatrix20(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.0); return m; }
// Matrix Transformation Operator Matrix Filter 21
export function createFilterMatrix21(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.05); return m; }
// Matrix Transformation Operator Matrix Filter 22
export function createFilterMatrix22(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.1); return m; }
// Matrix Transformation Operator Matrix Filter 23
export function createFilterMatrix23(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.1500000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 24
export function createFilterMatrix24(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.2000000000000002); return m; }
// Matrix Transformation Operator Matrix Filter 25
export function createFilterMatrix25(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.25); return m; }
// Matrix Transformation Operator Matrix Filter 26
export function createFilterMatrix26(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.3); return m; }
// Matrix Transformation Operator Matrix Filter 27
export function createFilterMatrix27(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.35); return m; }
// Matrix Transformation Operator Matrix Filter 28
export function createFilterMatrix28(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.4000000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 29
export function createFilterMatrix29(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.4500000000000002); return m; }
// Matrix Transformation Operator Matrix Filter 30
export function createFilterMatrix30(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.5); return m; }
// Matrix Transformation Operator Matrix Filter 31
export function createFilterMatrix31(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.55); return m; }
// Matrix Transformation Operator Matrix Filter 32
export function createFilterMatrix32(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.6); return m; }
// Matrix Transformation Operator Matrix Filter 33
export function createFilterMatrix33(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.6500000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 34
export function createFilterMatrix34(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.7000000000000002); return m; }
// Matrix Transformation Operator Matrix Filter 35
export function createFilterMatrix35(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.75); return m; }
// Matrix Transformation Operator Matrix Filter 36
export function createFilterMatrix36(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.8); return m; }
// Matrix Transformation Operator Matrix Filter 37
export function createFilterMatrix37(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.85); return m; }
// Matrix Transformation Operator Matrix Filter 38
export function createFilterMatrix38(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.9000000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 39
export function createFilterMatrix39(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 1.9500000000000002); return m; }
// Matrix Transformation Operator Matrix Filter 40
export function createFilterMatrix40(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.0); return m; }
// Matrix Transformation Operator Matrix Filter 41
export function createFilterMatrix41(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.0500000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 42
export function createFilterMatrix42(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.1); return m; }
// Matrix Transformation Operator Matrix Filter 43
export function createFilterMatrix43(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.15); return m; }
// Matrix Transformation Operator Matrix Filter 44
export function createFilterMatrix44(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.2); return m; }
// Matrix Transformation Operator Matrix Filter 45
export function createFilterMatrix45(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.25); return m; }
// Matrix Transformation Operator Matrix Filter 46
export function createFilterMatrix46(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.3000000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 47
export function createFilterMatrix47(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.35); return m; }
// Matrix Transformation Operator Matrix Filter 48
export function createFilterMatrix48(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.4000000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 49
export function createFilterMatrix49(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.45); return m; }
// Matrix Transformation Operator Matrix Filter 50
export function createFilterMatrix50(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.5); return m; }
// Matrix Transformation Operator Matrix Filter 51
export function createFilterMatrix51(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.5500000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 52
export function createFilterMatrix52(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.6); return m; }
// Matrix Transformation Operator Matrix Filter 53
export function createFilterMatrix53(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.6500000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 54
export function createFilterMatrix54(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.7); return m; }
// Matrix Transformation Operator Matrix Filter 55
export function createFilterMatrix55(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.75); return m; }
// Matrix Transformation Operator Matrix Filter 56
export function createFilterMatrix56(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.8000000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 57
export function createFilterMatrix57(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.85); return m; }
// Matrix Transformation Operator Matrix Filter 58
export function createFilterMatrix58(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.9000000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 59
export function createFilterMatrix59(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 2.95); return m; }
// Matrix Transformation Operator Matrix Filter 60
export function createFilterMatrix60(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.0); return m; }
// Matrix Transformation Operator Matrix Filter 61
export function createFilterMatrix61(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.0500000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 62
export function createFilterMatrix62(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.1); return m; }
// Matrix Transformation Operator Matrix Filter 63
export function createFilterMatrix63(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.1500000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 64
export function createFilterMatrix64(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.2); return m; }
// Matrix Transformation Operator Matrix Filter 65
export function createFilterMatrix65(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.25); return m; }
// Matrix Transformation Operator Matrix Filter 66
export function createFilterMatrix66(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.3000000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 67
export function createFilterMatrix67(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.35); return m; }
// Matrix Transformation Operator Matrix Filter 68
export function createFilterMatrix68(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.4000000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 69
export function createFilterMatrix69(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.45); return m; }
// Matrix Transformation Operator Matrix Filter 70
export function createFilterMatrix70(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.5); return m; }
// Matrix Transformation Operator Matrix Filter 71
export function createFilterMatrix71(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.5500000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 72
export function createFilterMatrix72(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.6); return m; }
// Matrix Transformation Operator Matrix Filter 73
export function createFilterMatrix73(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.6500000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 74
export function createFilterMatrix74(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.7); return m; }
// Matrix Transformation Operator Matrix Filter 75
export function createFilterMatrix75(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.75); return m; }
// Matrix Transformation Operator Matrix Filter 76
export function createFilterMatrix76(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.8000000000000003); return m; }
// Matrix Transformation Operator Matrix Filter 77
export function createFilterMatrix77(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.85); return m; }
// Matrix Transformation Operator Matrix Filter 78
export function createFilterMatrix78(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.9000000000000004); return m; }
// Matrix Transformation Operator Matrix Filter 79
export function createFilterMatrix79(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 3.95); return m; }
// Matrix Transformation Operator Matrix Filter 80
export function createFilterMatrix80(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.0); return m; }
// Matrix Transformation Operator Matrix Filter 81
export function createFilterMatrix81(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.05); return m; }
// Matrix Transformation Operator Matrix Filter 82
export function createFilterMatrix82(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.1000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 83
export function createFilterMatrix83(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.15); return m; }
// Matrix Transformation Operator Matrix Filter 84
export function createFilterMatrix84(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.2); return m; }
// Matrix Transformation Operator Matrix Filter 85
export function createFilterMatrix85(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.25); return m; }
// Matrix Transformation Operator Matrix Filter 86
export function createFilterMatrix86(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.3); return m; }
// Matrix Transformation Operator Matrix Filter 87
export function createFilterMatrix87(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.3500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 88
export function createFilterMatrix88(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.4); return m; }
// Matrix Transformation Operator Matrix Filter 89
export function createFilterMatrix89(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.45); return m; }
// Matrix Transformation Operator Matrix Filter 90
export function createFilterMatrix90(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.5); return m; }
// Matrix Transformation Operator Matrix Filter 91
export function createFilterMatrix91(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.55); return m; }
// Matrix Transformation Operator Matrix Filter 92
export function createFilterMatrix92(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.6000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 93
export function createFilterMatrix93(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.65); return m; }
// Matrix Transformation Operator Matrix Filter 94
export function createFilterMatrix94(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.7); return m; }
// Matrix Transformation Operator Matrix Filter 95
export function createFilterMatrix95(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.75); return m; }
// Matrix Transformation Operator Matrix Filter 96
export function createFilterMatrix96(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.800000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 97
export function createFilterMatrix97(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.8500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 98
export function createFilterMatrix98(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.9); return m; }
// Matrix Transformation Operator Matrix Filter 99
export function createFilterMatrix99(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 4.95); return m; }
// Matrix Transformation Operator Matrix Filter 100
export function createFilterMatrix100(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.0); return m; }
// Matrix Transformation Operator Matrix Filter 101
export function createFilterMatrix101(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.050000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 102
export function createFilterMatrix102(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.1000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 103
export function createFilterMatrix103(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.15); return m; }
// Matrix Transformation Operator Matrix Filter 104
export function createFilterMatrix104(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.2); return m; }
// Matrix Transformation Operator Matrix Filter 105
export function createFilterMatrix105(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.25); return m; }
// Matrix Transformation Operator Matrix Filter 106
export function createFilterMatrix106(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.300000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 107
export function createFilterMatrix107(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.3500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 108
export function createFilterMatrix108(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.4); return m; }
// Matrix Transformation Operator Matrix Filter 109
export function createFilterMatrix109(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.45); return m; }
// Matrix Transformation Operator Matrix Filter 110
export function createFilterMatrix110(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.5); return m; }
// Matrix Transformation Operator Matrix Filter 111
export function createFilterMatrix111(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.550000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 112
export function createFilterMatrix112(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.6000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 113
export function createFilterMatrix113(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.65); return m; }
// Matrix Transformation Operator Matrix Filter 114
export function createFilterMatrix114(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.7); return m; }
// Matrix Transformation Operator Matrix Filter 115
export function createFilterMatrix115(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.75); return m; }
// Matrix Transformation Operator Matrix Filter 116
export function createFilterMatrix116(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.800000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 117
export function createFilterMatrix117(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.8500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 118
export function createFilterMatrix118(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.9); return m; }
// Matrix Transformation Operator Matrix Filter 119
export function createFilterMatrix119(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 5.95); return m; }
// Matrix Transformation Operator Matrix Filter 120
export function createFilterMatrix120(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.0); return m; }
// Matrix Transformation Operator Matrix Filter 121
export function createFilterMatrix121(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.050000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 122
export function createFilterMatrix122(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.1000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 123
export function createFilterMatrix123(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.15); return m; }
// Matrix Transformation Operator Matrix Filter 124
export function createFilterMatrix124(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.2); return m; }
// Matrix Transformation Operator Matrix Filter 125
export function createFilterMatrix125(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.25); return m; }
// Matrix Transformation Operator Matrix Filter 126
export function createFilterMatrix126(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.300000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 127
export function createFilterMatrix127(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.3500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 128
export function createFilterMatrix128(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.4); return m; }
// Matrix Transformation Operator Matrix Filter 129
export function createFilterMatrix129(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.45); return m; }
// Matrix Transformation Operator Matrix Filter 130
export function createFilterMatrix130(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.5); return m; }
// Matrix Transformation Operator Matrix Filter 131
export function createFilterMatrix131(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.550000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 132
export function createFilterMatrix132(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.6000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 133
export function createFilterMatrix133(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.65); return m; }
// Matrix Transformation Operator Matrix Filter 134
export function createFilterMatrix134(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.7); return m; }
// Matrix Transformation Operator Matrix Filter 135
export function createFilterMatrix135(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.75); return m; }
// Matrix Transformation Operator Matrix Filter 136
export function createFilterMatrix136(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.800000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 137
export function createFilterMatrix137(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.8500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 138
export function createFilterMatrix138(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.9); return m; }
// Matrix Transformation Operator Matrix Filter 139
export function createFilterMatrix139(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 6.95); return m; }
// Matrix Transformation Operator Matrix Filter 140
export function createFilterMatrix140(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.0); return m; }
// Matrix Transformation Operator Matrix Filter 141
export function createFilterMatrix141(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.050000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 142
export function createFilterMatrix142(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.1000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 143
export function createFilterMatrix143(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.15); return m; }
// Matrix Transformation Operator Matrix Filter 144
export function createFilterMatrix144(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.2); return m; }
// Matrix Transformation Operator Matrix Filter 145
export function createFilterMatrix145(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.25); return m; }
// Matrix Transformation Operator Matrix Filter 146
export function createFilterMatrix146(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.300000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 147
export function createFilterMatrix147(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.3500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 148
export function createFilterMatrix148(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.4); return m; }
// Matrix Transformation Operator Matrix Filter 149
export function createFilterMatrix149(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.45); return m; }
// Matrix Transformation Operator Matrix Filter 150
export function createFilterMatrix150(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.5); return m; }
// Matrix Transformation Operator Matrix Filter 151
export function createFilterMatrix151(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.550000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 152
export function createFilterMatrix152(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.6000000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 153
export function createFilterMatrix153(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.65); return m; }
// Matrix Transformation Operator Matrix Filter 154
export function createFilterMatrix154(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.7); return m; }
// Matrix Transformation Operator Matrix Filter 155
export function createFilterMatrix155(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.75); return m; }
// Matrix Transformation Operator Matrix Filter 156
export function createFilterMatrix156(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.800000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 157
export function createFilterMatrix157(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.8500000000000005); return m; }
// Matrix Transformation Operator Matrix Filter 158
export function createFilterMatrix158(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.9); return m; }
// Matrix Transformation Operator Matrix Filter 159
export function createFilterMatrix159(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 7.95); return m; }
// Matrix Transformation Operator Matrix Filter 160
export function createFilterMatrix160(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.0); return m; }
// Matrix Transformation Operator Matrix Filter 161
export function createFilterMatrix161(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.05); return m; }
// Matrix Transformation Operator Matrix Filter 162
export function createFilterMatrix162(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.1); return m; }
// Matrix Transformation Operator Matrix Filter 163
export function createFilterMatrix163(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.15); return m; }
// Matrix Transformation Operator Matrix Filter 164
export function createFilterMatrix164(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 165
export function createFilterMatrix165(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.25); return m; }
// Matrix Transformation Operator Matrix Filter 166
export function createFilterMatrix166(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.3); return m; }
// Matrix Transformation Operator Matrix Filter 167
export function createFilterMatrix167(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.35); return m; }
// Matrix Transformation Operator Matrix Filter 168
export function createFilterMatrix168(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.4); return m; }
// Matrix Transformation Operator Matrix Filter 169
export function createFilterMatrix169(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 170
export function createFilterMatrix170(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.5); return m; }
// Matrix Transformation Operator Matrix Filter 171
export function createFilterMatrix171(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.55); return m; }
// Matrix Transformation Operator Matrix Filter 172
export function createFilterMatrix172(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.6); return m; }
// Matrix Transformation Operator Matrix Filter 173
export function createFilterMatrix173(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.65); return m; }
// Matrix Transformation Operator Matrix Filter 174
export function createFilterMatrix174(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 175
export function createFilterMatrix175(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.75); return m; }
// Matrix Transformation Operator Matrix Filter 176
export function createFilterMatrix176(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.8); return m; }
// Matrix Transformation Operator Matrix Filter 177
export function createFilterMatrix177(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.85); return m; }
// Matrix Transformation Operator Matrix Filter 178
export function createFilterMatrix178(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.9); return m; }
// Matrix Transformation Operator Matrix Filter 179
export function createFilterMatrix179(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 8.950000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 180
export function createFilterMatrix180(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.0); return m; }
// Matrix Transformation Operator Matrix Filter 181
export function createFilterMatrix181(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.05); return m; }
// Matrix Transformation Operator Matrix Filter 182
export function createFilterMatrix182(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.1); return m; }
// Matrix Transformation Operator Matrix Filter 183
export function createFilterMatrix183(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.15); return m; }
// Matrix Transformation Operator Matrix Filter 184
export function createFilterMatrix184(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 185
export function createFilterMatrix185(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.25); return m; }
// Matrix Transformation Operator Matrix Filter 186
export function createFilterMatrix186(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.3); return m; }
// Matrix Transformation Operator Matrix Filter 187
export function createFilterMatrix187(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.35); return m; }
// Matrix Transformation Operator Matrix Filter 188
export function createFilterMatrix188(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.4); return m; }
// Matrix Transformation Operator Matrix Filter 189
export function createFilterMatrix189(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 190
export function createFilterMatrix190(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.5); return m; }
// Matrix Transformation Operator Matrix Filter 191
export function createFilterMatrix191(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.55); return m; }
// Matrix Transformation Operator Matrix Filter 192
export function createFilterMatrix192(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.600000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 193
export function createFilterMatrix193(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.65); return m; }
// Matrix Transformation Operator Matrix Filter 194
export function createFilterMatrix194(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 195
export function createFilterMatrix195(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.75); return m; }
// Matrix Transformation Operator Matrix Filter 196
export function createFilterMatrix196(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.8); return m; }
// Matrix Transformation Operator Matrix Filter 197
export function createFilterMatrix197(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.850000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 198
export function createFilterMatrix198(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.9); return m; }
// Matrix Transformation Operator Matrix Filter 199
export function createFilterMatrix199(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 9.950000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 200
export function createFilterMatrix200(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.0); return m; }
// Matrix Transformation Operator Matrix Filter 201
export function createFilterMatrix201(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.05); return m; }
// Matrix Transformation Operator Matrix Filter 202
export function createFilterMatrix202(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.100000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 203
export function createFilterMatrix203(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.15); return m; }
// Matrix Transformation Operator Matrix Filter 204
export function createFilterMatrix204(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 205
export function createFilterMatrix205(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.25); return m; }
// Matrix Transformation Operator Matrix Filter 206
export function createFilterMatrix206(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.3); return m; }
// Matrix Transformation Operator Matrix Filter 207
export function createFilterMatrix207(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.350000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 208
export function createFilterMatrix208(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.4); return m; }
// Matrix Transformation Operator Matrix Filter 209
export function createFilterMatrix209(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 210
export function createFilterMatrix210(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.5); return m; }
// Matrix Transformation Operator Matrix Filter 211
export function createFilterMatrix211(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.55); return m; }
// Matrix Transformation Operator Matrix Filter 212
export function createFilterMatrix212(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.600000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 213
export function createFilterMatrix213(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.65); return m; }
// Matrix Transformation Operator Matrix Filter 214
export function createFilterMatrix214(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 215
export function createFilterMatrix215(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.75); return m; }
// Matrix Transformation Operator Matrix Filter 216
export function createFilterMatrix216(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.8); return m; }
// Matrix Transformation Operator Matrix Filter 217
export function createFilterMatrix217(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.850000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 218
export function createFilterMatrix218(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.9); return m; }
// Matrix Transformation Operator Matrix Filter 219
export function createFilterMatrix219(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 10.950000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 220
export function createFilterMatrix220(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.0); return m; }
// Matrix Transformation Operator Matrix Filter 221
export function createFilterMatrix221(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.05); return m; }
// Matrix Transformation Operator Matrix Filter 222
export function createFilterMatrix222(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.100000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 223
export function createFilterMatrix223(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.15); return m; }
// Matrix Transformation Operator Matrix Filter 224
export function createFilterMatrix224(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 225
export function createFilterMatrix225(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.25); return m; }
// Matrix Transformation Operator Matrix Filter 226
export function createFilterMatrix226(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.3); return m; }
// Matrix Transformation Operator Matrix Filter 227
export function createFilterMatrix227(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.350000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 228
export function createFilterMatrix228(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.4); return m; }
// Matrix Transformation Operator Matrix Filter 229
export function createFilterMatrix229(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 230
export function createFilterMatrix230(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.5); return m; }
// Matrix Transformation Operator Matrix Filter 231
export function createFilterMatrix231(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.55); return m; }
// Matrix Transformation Operator Matrix Filter 232
export function createFilterMatrix232(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.600000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 233
export function createFilterMatrix233(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.65); return m; }
// Matrix Transformation Operator Matrix Filter 234
export function createFilterMatrix234(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 235
export function createFilterMatrix235(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.75); return m; }
// Matrix Transformation Operator Matrix Filter 236
export function createFilterMatrix236(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.8); return m; }
// Matrix Transformation Operator Matrix Filter 237
export function createFilterMatrix237(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.850000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 238
export function createFilterMatrix238(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.9); return m; }
// Matrix Transformation Operator Matrix Filter 239
export function createFilterMatrix239(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 11.950000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 240
export function createFilterMatrix240(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.0); return m; }
// Matrix Transformation Operator Matrix Filter 241
export function createFilterMatrix241(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.05); return m; }
// Matrix Transformation Operator Matrix Filter 242
export function createFilterMatrix242(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.100000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 243
export function createFilterMatrix243(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.15); return m; }
// Matrix Transformation Operator Matrix Filter 244
export function createFilterMatrix244(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 245
export function createFilterMatrix245(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.25); return m; }
// Matrix Transformation Operator Matrix Filter 246
export function createFilterMatrix246(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.3); return m; }
// Matrix Transformation Operator Matrix Filter 247
export function createFilterMatrix247(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.350000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 248
export function createFilterMatrix248(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.4); return m; }
// Matrix Transformation Operator Matrix Filter 249
export function createFilterMatrix249(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 250
export function createFilterMatrix250(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.5); return m; }
// Matrix Transformation Operator Matrix Filter 251
export function createFilterMatrix251(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.55); return m; }
// Matrix Transformation Operator Matrix Filter 252
export function createFilterMatrix252(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.600000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 253
export function createFilterMatrix253(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.65); return m; }
// Matrix Transformation Operator Matrix Filter 254
export function createFilterMatrix254(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 255
export function createFilterMatrix255(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.75); return m; }
// Matrix Transformation Operator Matrix Filter 256
export function createFilterMatrix256(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.8); return m; }
// Matrix Transformation Operator Matrix Filter 257
export function createFilterMatrix257(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.850000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 258
export function createFilterMatrix258(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.9); return m; }
// Matrix Transformation Operator Matrix Filter 259
export function createFilterMatrix259(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 12.950000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 260
export function createFilterMatrix260(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.0); return m; }
// Matrix Transformation Operator Matrix Filter 261
export function createFilterMatrix261(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.05); return m; }
// Matrix Transformation Operator Matrix Filter 262
export function createFilterMatrix262(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.100000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 263
export function createFilterMatrix263(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.15); return m; }
// Matrix Transformation Operator Matrix Filter 264
export function createFilterMatrix264(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 265
export function createFilterMatrix265(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.25); return m; }
// Matrix Transformation Operator Matrix Filter 266
export function createFilterMatrix266(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.3); return m; }
// Matrix Transformation Operator Matrix Filter 267
export function createFilterMatrix267(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.350000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 268
export function createFilterMatrix268(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.4); return m; }
// Matrix Transformation Operator Matrix Filter 269
export function createFilterMatrix269(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 270
export function createFilterMatrix270(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.5); return m; }
// Matrix Transformation Operator Matrix Filter 271
export function createFilterMatrix271(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.55); return m; }
// Matrix Transformation Operator Matrix Filter 272
export function createFilterMatrix272(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.600000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 273
export function createFilterMatrix273(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.65); return m; }
// Matrix Transformation Operator Matrix Filter 274
export function createFilterMatrix274(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 275
export function createFilterMatrix275(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.75); return m; }
// Matrix Transformation Operator Matrix Filter 276
export function createFilterMatrix276(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.8); return m; }
// Matrix Transformation Operator Matrix Filter 277
export function createFilterMatrix277(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.850000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 278
export function createFilterMatrix278(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.9); return m; }
// Matrix Transformation Operator Matrix Filter 279
export function createFilterMatrix279(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 13.950000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 280
export function createFilterMatrix280(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.0); return m; }
// Matrix Transformation Operator Matrix Filter 281
export function createFilterMatrix281(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.05); return m; }
// Matrix Transformation Operator Matrix Filter 282
export function createFilterMatrix282(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.100000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 283
export function createFilterMatrix283(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.15); return m; }
// Matrix Transformation Operator Matrix Filter 284
export function createFilterMatrix284(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.200000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 285
export function createFilterMatrix285(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.25); return m; }
// Matrix Transformation Operator Matrix Filter 286
export function createFilterMatrix286(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.3); return m; }
// Matrix Transformation Operator Matrix Filter 287
export function createFilterMatrix287(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.350000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 288
export function createFilterMatrix288(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.4); return m; }
// Matrix Transformation Operator Matrix Filter 289
export function createFilterMatrix289(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.450000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 290
export function createFilterMatrix290(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.5); return m; }
// Matrix Transformation Operator Matrix Filter 291
export function createFilterMatrix291(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.55); return m; }
// Matrix Transformation Operator Matrix Filter 292
export function createFilterMatrix292(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.600000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 293
export function createFilterMatrix293(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.65); return m; }
// Matrix Transformation Operator Matrix Filter 294
export function createFilterMatrix294(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.700000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 295
export function createFilterMatrix295(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.75); return m; }
// Matrix Transformation Operator Matrix Filter 296
export function createFilterMatrix296(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.8); return m; }
// Matrix Transformation Operator Matrix Filter 297
export function createFilterMatrix297(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.850000000000001); return m; }
// Matrix Transformation Operator Matrix Filter 298
export function createFilterMatrix298(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.9); return m; }
// Matrix Transformation Operator Matrix Filter 299
export function createFilterMatrix299(angle, scaleFactor) { const m = new Matrix2D(); m.rotate(angle * 14.950000000000001); return m; }
