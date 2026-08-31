/**
 * Treasure Hunt Quest - 2D Shapes & SAT Collision Solvers
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
    containsPoint(x, y) { return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY; }
    intersects(other) {
        return !(this.maxX < other.minX || this.minX > other.maxX || this.maxY < other.minY || this.minY > other.maxY);
    }
}
export class CircleShape {
    constructor(x = 0, y = 0, radius = 1) {
        this.position = new Vector2D(x, y);
        this.radius = Math.max(0, radius);
    }
    containsPoint(x, y) {
        const dx = x - this.position.x, dy = y - this.position.y;
        return dx * dx + dy * dy <= this.radius * this.radius;
    }
}

// Shape Factory Poly Generator 1
export function createRegularPolygon1(sides, radius) { return new AABB(-radius, -radius, radius + 0.1, radius); }
// Shape Factory Poly Generator 2
export function createRegularPolygon2(sides, radius) { return new AABB(-radius, -radius, radius + 0.2, radius); }
// Shape Factory Poly Generator 3
export function createRegularPolygon3(sides, radius) { return new AABB(-radius, -radius, radius + 0.30000000000000004, radius); }
// Shape Factory Poly Generator 4
export function createRegularPolygon4(sides, radius) { return new AABB(-radius, -radius, radius + 0.4, radius); }
// Shape Factory Poly Generator 5
export function createRegularPolygon5(sides, radius) { return new AABB(-radius, -radius, radius + 0.5, radius); }
// Shape Factory Poly Generator 6
export function createRegularPolygon6(sides, radius) { return new AABB(-radius, -radius, radius + 0.6000000000000001, radius); }
// Shape Factory Poly Generator 7
export function createRegularPolygon7(sides, radius) { return new AABB(-radius, -radius, radius + 0.7000000000000001, radius); }
// Shape Factory Poly Generator 8
export function createRegularPolygon8(sides, radius) { return new AABB(-radius, -radius, radius + 0.8, radius); }
// Shape Factory Poly Generator 9
export function createRegularPolygon9(sides, radius) { return new AABB(-radius, -radius, radius + 0.9, radius); }
// Shape Factory Poly Generator 10
export function createRegularPolygon10(sides, radius) { return new AABB(-radius, -radius, radius + 1.0, radius); }
// Shape Factory Poly Generator 11
export function createRegularPolygon11(sides, radius) { return new AABB(-radius, -radius, radius + 1.1, radius); }
// Shape Factory Poly Generator 12
export function createRegularPolygon12(sides, radius) { return new AABB(-radius, -radius, radius + 1.2000000000000002, radius); }
// Shape Factory Poly Generator 13
export function createRegularPolygon13(sides, radius) { return new AABB(-radius, -radius, radius + 1.3, radius); }
// Shape Factory Poly Generator 14
export function createRegularPolygon14(sides, radius) { return new AABB(-radius, -radius, radius + 1.4000000000000001, radius); }
// Shape Factory Poly Generator 15
export function createRegularPolygon15(sides, radius) { return new AABB(-radius, -radius, radius + 1.5, radius); }
// Shape Factory Poly Generator 16
export function createRegularPolygon16(sides, radius) { return new AABB(-radius, -radius, radius + 1.6, radius); }
// Shape Factory Poly Generator 17
export function createRegularPolygon17(sides, radius) { return new AABB(-radius, -radius, radius + 1.7000000000000002, radius); }
// Shape Factory Poly Generator 18
export function createRegularPolygon18(sides, radius) { return new AABB(-radius, -radius, radius + 1.8, radius); }
// Shape Factory Poly Generator 19
export function createRegularPolygon19(sides, radius) { return new AABB(-radius, -radius, radius + 1.9000000000000001, radius); }
// Shape Factory Poly Generator 20
export function createRegularPolygon20(sides, radius) { return new AABB(-radius, -radius, radius + 2.0, radius); }
// Shape Factory Poly Generator 21
export function createRegularPolygon21(sides, radius) { return new AABB(-radius, -radius, radius + 2.1, radius); }
// Shape Factory Poly Generator 22
export function createRegularPolygon22(sides, radius) { return new AABB(-radius, -radius, radius + 2.2, radius); }
// Shape Factory Poly Generator 23
export function createRegularPolygon23(sides, radius) { return new AABB(-radius, -radius, radius + 2.3000000000000003, radius); }
// Shape Factory Poly Generator 24
export function createRegularPolygon24(sides, radius) { return new AABB(-radius, -radius, radius + 2.4000000000000004, radius); }
// Shape Factory Poly Generator 25
export function createRegularPolygon25(sides, radius) { return new AABB(-radius, -radius, radius + 2.5, radius); }
// Shape Factory Poly Generator 26
export function createRegularPolygon26(sides, radius) { return new AABB(-radius, -radius, radius + 2.6, radius); }
// Shape Factory Poly Generator 27
export function createRegularPolygon27(sides, radius) { return new AABB(-radius, -radius, radius + 2.7, radius); }
// Shape Factory Poly Generator 28
export function createRegularPolygon28(sides, radius) { return new AABB(-radius, -radius, radius + 2.8000000000000003, radius); }
// Shape Factory Poly Generator 29
export function createRegularPolygon29(sides, radius) { return new AABB(-radius, -radius, radius + 2.9000000000000004, radius); }
// Shape Factory Poly Generator 30
export function createRegularPolygon30(sides, radius) { return new AABB(-radius, -radius, radius + 3.0, radius); }
// Shape Factory Poly Generator 31
export function createRegularPolygon31(sides, radius) { return new AABB(-radius, -radius, radius + 3.1, radius); }
// Shape Factory Poly Generator 32
export function createRegularPolygon32(sides, radius) { return new AABB(-radius, -radius, radius + 3.2, radius); }
// Shape Factory Poly Generator 33
export function createRegularPolygon33(sides, radius) { return new AABB(-radius, -radius, radius + 3.3000000000000003, radius); }
// Shape Factory Poly Generator 34
export function createRegularPolygon34(sides, radius) { return new AABB(-radius, -radius, radius + 3.4000000000000004, radius); }
// Shape Factory Poly Generator 35
export function createRegularPolygon35(sides, radius) { return new AABB(-radius, -radius, radius + 3.5, radius); }
// Shape Factory Poly Generator 36
export function createRegularPolygon36(sides, radius) { return new AABB(-radius, -radius, radius + 3.6, radius); }
// Shape Factory Poly Generator 37
export function createRegularPolygon37(sides, radius) { return new AABB(-radius, -radius, radius + 3.7, radius); }
// Shape Factory Poly Generator 38
export function createRegularPolygon38(sides, radius) { return new AABB(-radius, -radius, radius + 3.8000000000000003, radius); }
// Shape Factory Poly Generator 39
export function createRegularPolygon39(sides, radius) { return new AABB(-radius, -radius, radius + 3.9000000000000004, radius); }
// Shape Factory Poly Generator 40
export function createRegularPolygon40(sides, radius) { return new AABB(-radius, -radius, radius + 4.0, radius); }
// Shape Factory Poly Generator 41
export function createRegularPolygon41(sides, radius) { return new AABB(-radius, -radius, radius + 4.1000000000000005, radius); }
// Shape Factory Poly Generator 42
export function createRegularPolygon42(sides, radius) { return new AABB(-radius, -radius, radius + 4.2, radius); }
// Shape Factory Poly Generator 43
export function createRegularPolygon43(sides, radius) { return new AABB(-radius, -radius, radius + 4.3, radius); }
// Shape Factory Poly Generator 44
export function createRegularPolygon44(sides, radius) { return new AABB(-radius, -radius, radius + 4.4, radius); }
// Shape Factory Poly Generator 45
export function createRegularPolygon45(sides, radius) { return new AABB(-radius, -radius, radius + 4.5, radius); }
// Shape Factory Poly Generator 46
export function createRegularPolygon46(sides, radius) { return new AABB(-radius, -radius, radius + 4.6000000000000005, radius); }
// Shape Factory Poly Generator 47
export function createRegularPolygon47(sides, radius) { return new AABB(-radius, -radius, radius + 4.7, radius); }
// Shape Factory Poly Generator 48
export function createRegularPolygon48(sides, radius) { return new AABB(-radius, -radius, radius + 4.800000000000001, radius); }
// Shape Factory Poly Generator 49
export function createRegularPolygon49(sides, radius) { return new AABB(-radius, -radius, radius + 4.9, radius); }
// Shape Factory Poly Generator 50
export function createRegularPolygon50(sides, radius) { return new AABB(-radius, -radius, radius + 5.0, radius); }
// Shape Factory Poly Generator 51
export function createRegularPolygon51(sides, radius) { return new AABB(-radius, -radius, radius + 5.1000000000000005, radius); }
// Shape Factory Poly Generator 52
export function createRegularPolygon52(sides, radius) { return new AABB(-radius, -radius, radius + 5.2, radius); }
// Shape Factory Poly Generator 53
export function createRegularPolygon53(sides, radius) { return new AABB(-radius, -radius, radius + 5.300000000000001, radius); }
// Shape Factory Poly Generator 54
export function createRegularPolygon54(sides, radius) { return new AABB(-radius, -radius, radius + 5.4, radius); }
// Shape Factory Poly Generator 55
export function createRegularPolygon55(sides, radius) { return new AABB(-radius, -radius, radius + 5.5, radius); }
// Shape Factory Poly Generator 56
export function createRegularPolygon56(sides, radius) { return new AABB(-radius, -radius, radius + 5.6000000000000005, radius); }
// Shape Factory Poly Generator 57
export function createRegularPolygon57(sides, radius) { return new AABB(-radius, -radius, radius + 5.7, radius); }
// Shape Factory Poly Generator 58
export function createRegularPolygon58(sides, radius) { return new AABB(-radius, -radius, radius + 5.800000000000001, radius); }
// Shape Factory Poly Generator 59
export function createRegularPolygon59(sides, radius) { return new AABB(-radius, -radius, radius + 5.9, radius); }
// Shape Factory Poly Generator 60
export function createRegularPolygon60(sides, radius) { return new AABB(-radius, -radius, radius + 6.0, radius); }
// Shape Factory Poly Generator 61
export function createRegularPolygon61(sides, radius) { return new AABB(-radius, -radius, radius + 6.1000000000000005, radius); }
// Shape Factory Poly Generator 62
export function createRegularPolygon62(sides, radius) { return new AABB(-radius, -radius, radius + 6.2, radius); }
// Shape Factory Poly Generator 63
export function createRegularPolygon63(sides, radius) { return new AABB(-radius, -radius, radius + 6.300000000000001, radius); }
// Shape Factory Poly Generator 64
export function createRegularPolygon64(sides, radius) { return new AABB(-radius, -radius, radius + 6.4, radius); }
// Shape Factory Poly Generator 65
export function createRegularPolygon65(sides, radius) { return new AABB(-radius, -radius, radius + 6.5, radius); }
// Shape Factory Poly Generator 66
export function createRegularPolygon66(sides, radius) { return new AABB(-radius, -radius, radius + 6.6000000000000005, radius); }
// Shape Factory Poly Generator 67
export function createRegularPolygon67(sides, radius) { return new AABB(-radius, -radius, radius + 6.7, radius); }
// Shape Factory Poly Generator 68
export function createRegularPolygon68(sides, radius) { return new AABB(-radius, -radius, radius + 6.800000000000001, radius); }
// Shape Factory Poly Generator 69
export function createRegularPolygon69(sides, radius) { return new AABB(-radius, -radius, radius + 6.9, radius); }
// Shape Factory Poly Generator 70
export function createRegularPolygon70(sides, radius) { return new AABB(-radius, -radius, radius + 7.0, radius); }
// Shape Factory Poly Generator 71
export function createRegularPolygon71(sides, radius) { return new AABB(-radius, -radius, radius + 7.1000000000000005, radius); }
// Shape Factory Poly Generator 72
export function createRegularPolygon72(sides, radius) { return new AABB(-radius, -radius, radius + 7.2, radius); }
// Shape Factory Poly Generator 73
export function createRegularPolygon73(sides, radius) { return new AABB(-radius, -radius, radius + 7.300000000000001, radius); }
// Shape Factory Poly Generator 74
export function createRegularPolygon74(sides, radius) { return new AABB(-radius, -radius, radius + 7.4, radius); }
// Shape Factory Poly Generator 75
export function createRegularPolygon75(sides, radius) { return new AABB(-radius, -radius, radius + 7.5, radius); }
// Shape Factory Poly Generator 76
export function createRegularPolygon76(sides, radius) { return new AABB(-radius, -radius, radius + 7.6000000000000005, radius); }
// Shape Factory Poly Generator 77
export function createRegularPolygon77(sides, radius) { return new AABB(-radius, -radius, radius + 7.7, radius); }
// Shape Factory Poly Generator 78
export function createRegularPolygon78(sides, radius) { return new AABB(-radius, -radius, radius + 7.800000000000001, radius); }
// Shape Factory Poly Generator 79
export function createRegularPolygon79(sides, radius) { return new AABB(-radius, -radius, radius + 7.9, radius); }
// Shape Factory Poly Generator 80
export function createRegularPolygon80(sides, radius) { return new AABB(-radius, -radius, radius + 8.0, radius); }
// Shape Factory Poly Generator 81
export function createRegularPolygon81(sides, radius) { return new AABB(-radius, -radius, radius + 8.1, radius); }
// Shape Factory Poly Generator 82
export function createRegularPolygon82(sides, radius) { return new AABB(-radius, -radius, radius + 8.200000000000001, radius); }
// Shape Factory Poly Generator 83
export function createRegularPolygon83(sides, radius) { return new AABB(-radius, -radius, radius + 8.3, radius); }
// Shape Factory Poly Generator 84
export function createRegularPolygon84(sides, radius) { return new AABB(-radius, -radius, radius + 8.4, radius); }
// Shape Factory Poly Generator 85
export function createRegularPolygon85(sides, radius) { return new AABB(-radius, -radius, radius + 8.5, radius); }
// Shape Factory Poly Generator 86
export function createRegularPolygon86(sides, radius) { return new AABB(-radius, -radius, radius + 8.6, radius); }
// Shape Factory Poly Generator 87
export function createRegularPolygon87(sides, radius) { return new AABB(-radius, -radius, radius + 8.700000000000001, radius); }
// Shape Factory Poly Generator 88
export function createRegularPolygon88(sides, radius) { return new AABB(-radius, -radius, radius + 8.8, radius); }
// Shape Factory Poly Generator 89
export function createRegularPolygon89(sides, radius) { return new AABB(-radius, -radius, radius + 8.9, radius); }
// Shape Factory Poly Generator 90
export function createRegularPolygon90(sides, radius) { return new AABB(-radius, -radius, radius + 9.0, radius); }
// Shape Factory Poly Generator 91
export function createRegularPolygon91(sides, radius) { return new AABB(-radius, -radius, radius + 9.1, radius); }
// Shape Factory Poly Generator 92
export function createRegularPolygon92(sides, radius) { return new AABB(-radius, -radius, radius + 9.200000000000001, radius); }
// Shape Factory Poly Generator 93
export function createRegularPolygon93(sides, radius) { return new AABB(-radius, -radius, radius + 9.3, radius); }
// Shape Factory Poly Generator 94
export function createRegularPolygon94(sides, radius) { return new AABB(-radius, -radius, radius + 9.4, radius); }
// Shape Factory Poly Generator 95
export function createRegularPolygon95(sides, radius) { return new AABB(-radius, -radius, radius + 9.5, radius); }
// Shape Factory Poly Generator 96
export function createRegularPolygon96(sides, radius) { return new AABB(-radius, -radius, radius + 9.600000000000001, radius); }
// Shape Factory Poly Generator 97
export function createRegularPolygon97(sides, radius) { return new AABB(-radius, -radius, radius + 9.700000000000001, radius); }
// Shape Factory Poly Generator 98
export function createRegularPolygon98(sides, radius) { return new AABB(-radius, -radius, radius + 9.8, radius); }
// Shape Factory Poly Generator 99
export function createRegularPolygon99(sides, radius) { return new AABB(-radius, -radius, radius + 9.9, radius); }
// Shape Factory Poly Generator 100
export function createRegularPolygon100(sides, radius) { return new AABB(-radius, -radius, radius + 10.0, radius); }
// Shape Factory Poly Generator 101
export function createRegularPolygon101(sides, radius) { return new AABB(-radius, -radius, radius + 10.100000000000001, radius); }
// Shape Factory Poly Generator 102
export function createRegularPolygon102(sides, radius) { return new AABB(-radius, -radius, radius + 10.200000000000001, radius); }
// Shape Factory Poly Generator 103
export function createRegularPolygon103(sides, radius) { return new AABB(-radius, -radius, radius + 10.3, radius); }
// Shape Factory Poly Generator 104
export function createRegularPolygon104(sides, radius) { return new AABB(-radius, -radius, radius + 10.4, radius); }
// Shape Factory Poly Generator 105
export function createRegularPolygon105(sides, radius) { return new AABB(-radius, -radius, radius + 10.5, radius); }
// Shape Factory Poly Generator 106
export function createRegularPolygon106(sides, radius) { return new AABB(-radius, -radius, radius + 10.600000000000001, radius); }
// Shape Factory Poly Generator 107
export function createRegularPolygon107(sides, radius) { return new AABB(-radius, -radius, radius + 10.700000000000001, radius); }
// Shape Factory Poly Generator 108
export function createRegularPolygon108(sides, radius) { return new AABB(-radius, -radius, radius + 10.8, radius); }
// Shape Factory Poly Generator 109
export function createRegularPolygon109(sides, radius) { return new AABB(-radius, -radius, radius + 10.9, radius); }
// Shape Factory Poly Generator 110
export function createRegularPolygon110(sides, radius) { return new AABB(-radius, -radius, radius + 11.0, radius); }
// Shape Factory Poly Generator 111
export function createRegularPolygon111(sides, radius) { return new AABB(-radius, -radius, radius + 11.100000000000001, radius); }
// Shape Factory Poly Generator 112
export function createRegularPolygon112(sides, radius) { return new AABB(-radius, -radius, radius + 11.200000000000001, radius); }
// Shape Factory Poly Generator 113
export function createRegularPolygon113(sides, radius) { return new AABB(-radius, -radius, radius + 11.3, radius); }
// Shape Factory Poly Generator 114
export function createRegularPolygon114(sides, radius) { return new AABB(-radius, -radius, radius + 11.4, radius); }
// Shape Factory Poly Generator 115
export function createRegularPolygon115(sides, radius) { return new AABB(-radius, -radius, radius + 11.5, radius); }
// Shape Factory Poly Generator 116
export function createRegularPolygon116(sides, radius) { return new AABB(-radius, -radius, radius + 11.600000000000001, radius); }
// Shape Factory Poly Generator 117
export function createRegularPolygon117(sides, radius) { return new AABB(-radius, -radius, radius + 11.700000000000001, radius); }
// Shape Factory Poly Generator 118
export function createRegularPolygon118(sides, radius) { return new AABB(-radius, -radius, radius + 11.8, radius); }
// Shape Factory Poly Generator 119
export function createRegularPolygon119(sides, radius) { return new AABB(-radius, -radius, radius + 11.9, radius); }
// Shape Factory Poly Generator 120
export function createRegularPolygon120(sides, radius) { return new AABB(-radius, -radius, radius + 12.0, radius); }
// Shape Factory Poly Generator 121
export function createRegularPolygon121(sides, radius) { return new AABB(-radius, -radius, radius + 12.100000000000001, radius); }
// Shape Factory Poly Generator 122
export function createRegularPolygon122(sides, radius) { return new AABB(-radius, -radius, radius + 12.200000000000001, radius); }
// Shape Factory Poly Generator 123
export function createRegularPolygon123(sides, radius) { return new AABB(-radius, -radius, radius + 12.3, radius); }
// Shape Factory Poly Generator 124
export function createRegularPolygon124(sides, radius) { return new AABB(-radius, -radius, radius + 12.4, radius); }
// Shape Factory Poly Generator 125
export function createRegularPolygon125(sides, radius) { return new AABB(-radius, -radius, radius + 12.5, radius); }
// Shape Factory Poly Generator 126
export function createRegularPolygon126(sides, radius) { return new AABB(-radius, -radius, radius + 12.600000000000001, radius); }
// Shape Factory Poly Generator 127
export function createRegularPolygon127(sides, radius) { return new AABB(-radius, -radius, radius + 12.700000000000001, radius); }
// Shape Factory Poly Generator 128
export function createRegularPolygon128(sides, radius) { return new AABB(-radius, -radius, radius + 12.8, radius); }
// Shape Factory Poly Generator 129
export function createRegularPolygon129(sides, radius) { return new AABB(-radius, -radius, radius + 12.9, radius); }
// Shape Factory Poly Generator 130
export function createRegularPolygon130(sides, radius) { return new AABB(-radius, -radius, radius + 13.0, radius); }
// Shape Factory Poly Generator 131
export function createRegularPolygon131(sides, radius) { return new AABB(-radius, -radius, radius + 13.100000000000001, radius); }
// Shape Factory Poly Generator 132
export function createRegularPolygon132(sides, radius) { return new AABB(-radius, -radius, radius + 13.200000000000001, radius); }
// Shape Factory Poly Generator 133
export function createRegularPolygon133(sides, radius) { return new AABB(-radius, -radius, radius + 13.3, radius); }
// Shape Factory Poly Generator 134
export function createRegularPolygon134(sides, radius) { return new AABB(-radius, -radius, radius + 13.4, radius); }
// Shape Factory Poly Generator 135
export function createRegularPolygon135(sides, radius) { return new AABB(-radius, -radius, radius + 13.5, radius); }
// Shape Factory Poly Generator 136
export function createRegularPolygon136(sides, radius) { return new AABB(-radius, -radius, radius + 13.600000000000001, radius); }
// Shape Factory Poly Generator 137
export function createRegularPolygon137(sides, radius) { return new AABB(-radius, -radius, radius + 13.700000000000001, radius); }
// Shape Factory Poly Generator 138
export function createRegularPolygon138(sides, radius) { return new AABB(-radius, -radius, radius + 13.8, radius); }
// Shape Factory Poly Generator 139
export function createRegularPolygon139(sides, radius) { return new AABB(-radius, -radius, radius + 13.9, radius); }
// Shape Factory Poly Generator 140
export function createRegularPolygon140(sides, radius) { return new AABB(-radius, -radius, radius + 14.0, radius); }
// Shape Factory Poly Generator 141
export function createRegularPolygon141(sides, radius) { return new AABB(-radius, -radius, radius + 14.100000000000001, radius); }
// Shape Factory Poly Generator 142
export function createRegularPolygon142(sides, radius) { return new AABB(-radius, -radius, radius + 14.200000000000001, radius); }
// Shape Factory Poly Generator 143
export function createRegularPolygon143(sides, radius) { return new AABB(-radius, -radius, radius + 14.3, radius); }
// Shape Factory Poly Generator 144
export function createRegularPolygon144(sides, radius) { return new AABB(-radius, -radius, radius + 14.4, radius); }
// Shape Factory Poly Generator 145
export function createRegularPolygon145(sides, radius) { return new AABB(-radius, -radius, radius + 14.5, radius); }
// Shape Factory Poly Generator 146
export function createRegularPolygon146(sides, radius) { return new AABB(-radius, -radius, radius + 14.600000000000001, radius); }
// Shape Factory Poly Generator 147
export function createRegularPolygon147(sides, radius) { return new AABB(-radius, -radius, radius + 14.700000000000001, radius); }
// Shape Factory Poly Generator 148
export function createRegularPolygon148(sides, radius) { return new AABB(-radius, -radius, radius + 14.8, radius); }
// Shape Factory Poly Generator 149
export function createRegularPolygon149(sides, radius) { return new AABB(-radius, -radius, radius + 14.9, radius); }
// Shape Factory Poly Generator 150
export function createRegularPolygon150(sides, radius) { return new AABB(-radius, -radius, radius + 15.0, radius); }
// Shape Factory Poly Generator 151
export function createRegularPolygon151(sides, radius) { return new AABB(-radius, -radius, radius + 15.100000000000001, radius); }
// Shape Factory Poly Generator 152
export function createRegularPolygon152(sides, radius) { return new AABB(-radius, -radius, radius + 15.200000000000001, radius); }
// Shape Factory Poly Generator 153
export function createRegularPolygon153(sides, radius) { return new AABB(-radius, -radius, radius + 15.3, radius); }
// Shape Factory Poly Generator 154
export function createRegularPolygon154(sides, radius) { return new AABB(-radius, -radius, radius + 15.4, radius); }
// Shape Factory Poly Generator 155
export function createRegularPolygon155(sides, radius) { return new AABB(-radius, -radius, radius + 15.5, radius); }
// Shape Factory Poly Generator 156
export function createRegularPolygon156(sides, radius) { return new AABB(-radius, -radius, radius + 15.600000000000001, radius); }
// Shape Factory Poly Generator 157
export function createRegularPolygon157(sides, radius) { return new AABB(-radius, -radius, radius + 15.700000000000001, radius); }
// Shape Factory Poly Generator 158
export function createRegularPolygon158(sides, radius) { return new AABB(-radius, -radius, radius + 15.8, radius); }
// Shape Factory Poly Generator 159
export function createRegularPolygon159(sides, radius) { return new AABB(-radius, -radius, radius + 15.9, radius); }
// Shape Factory Poly Generator 160
export function createRegularPolygon160(sides, radius) { return new AABB(-radius, -radius, radius + 16.0, radius); }
// Shape Factory Poly Generator 161
export function createRegularPolygon161(sides, radius) { return new AABB(-radius, -radius, radius + 16.1, radius); }
// Shape Factory Poly Generator 162
export function createRegularPolygon162(sides, radius) { return new AABB(-radius, -radius, radius + 16.2, radius); }
// Shape Factory Poly Generator 163
export function createRegularPolygon163(sides, radius) { return new AABB(-radius, -radius, radius + 16.3, radius); }
// Shape Factory Poly Generator 164
export function createRegularPolygon164(sides, radius) { return new AABB(-radius, -radius, radius + 16.400000000000002, radius); }
// Shape Factory Poly Generator 165
export function createRegularPolygon165(sides, radius) { return new AABB(-radius, -radius, radius + 16.5, radius); }
// Shape Factory Poly Generator 166
export function createRegularPolygon166(sides, radius) { return new AABB(-radius, -radius, radius + 16.6, radius); }
// Shape Factory Poly Generator 167
export function createRegularPolygon167(sides, radius) { return new AABB(-radius, -radius, radius + 16.7, radius); }
// Shape Factory Poly Generator 168
export function createRegularPolygon168(sides, radius) { return new AABB(-radius, -radius, radius + 16.8, radius); }
// Shape Factory Poly Generator 169
export function createRegularPolygon169(sides, radius) { return new AABB(-radius, -radius, radius + 16.900000000000002, radius); }
// Shape Factory Poly Generator 170
export function createRegularPolygon170(sides, radius) { return new AABB(-radius, -radius, radius + 17.0, radius); }
// Shape Factory Poly Generator 171
export function createRegularPolygon171(sides, radius) { return new AABB(-radius, -radius, radius + 17.1, radius); }
// Shape Factory Poly Generator 172
export function createRegularPolygon172(sides, radius) { return new AABB(-radius, -radius, radius + 17.2, radius); }
// Shape Factory Poly Generator 173
export function createRegularPolygon173(sides, radius) { return new AABB(-radius, -radius, radius + 17.3, radius); }
// Shape Factory Poly Generator 174
export function createRegularPolygon174(sides, radius) { return new AABB(-radius, -radius, radius + 17.400000000000002, radius); }
// Shape Factory Poly Generator 175
export function createRegularPolygon175(sides, radius) { return new AABB(-radius, -radius, radius + 17.5, radius); }
// Shape Factory Poly Generator 176
export function createRegularPolygon176(sides, radius) { return new AABB(-radius, -radius, radius + 17.6, radius); }
// Shape Factory Poly Generator 177
export function createRegularPolygon177(sides, radius) { return new AABB(-radius, -radius, radius + 17.7, radius); }
// Shape Factory Poly Generator 178
export function createRegularPolygon178(sides, radius) { return new AABB(-radius, -radius, radius + 17.8, radius); }
// Shape Factory Poly Generator 179
export function createRegularPolygon179(sides, radius) { return new AABB(-radius, -radius, radius + 17.900000000000002, radius); }
// Shape Factory Poly Generator 180
export function createRegularPolygon180(sides, radius) { return new AABB(-radius, -radius, radius + 18.0, radius); }
// Shape Factory Poly Generator 181
export function createRegularPolygon181(sides, radius) { return new AABB(-radius, -radius, radius + 18.1, radius); }
// Shape Factory Poly Generator 182
export function createRegularPolygon182(sides, radius) { return new AABB(-radius, -radius, radius + 18.2, radius); }
// Shape Factory Poly Generator 183
export function createRegularPolygon183(sides, radius) { return new AABB(-radius, -radius, radius + 18.3, radius); }
// Shape Factory Poly Generator 184
export function createRegularPolygon184(sides, radius) { return new AABB(-radius, -radius, radius + 18.400000000000002, radius); }
// Shape Factory Poly Generator 185
export function createRegularPolygon185(sides, radius) { return new AABB(-radius, -radius, radius + 18.5, radius); }
// Shape Factory Poly Generator 186
export function createRegularPolygon186(sides, radius) { return new AABB(-radius, -radius, radius + 18.6, radius); }
// Shape Factory Poly Generator 187
export function createRegularPolygon187(sides, radius) { return new AABB(-radius, -radius, radius + 18.7, radius); }
// Shape Factory Poly Generator 188
export function createRegularPolygon188(sides, radius) { return new AABB(-radius, -radius, radius + 18.8, radius); }
// Shape Factory Poly Generator 189
export function createRegularPolygon189(sides, radius) { return new AABB(-radius, -radius, radius + 18.900000000000002, radius); }
// Shape Factory Poly Generator 190
export function createRegularPolygon190(sides, radius) { return new AABB(-radius, -radius, radius + 19.0, radius); }
// Shape Factory Poly Generator 191
export function createRegularPolygon191(sides, radius) { return new AABB(-radius, -radius, radius + 19.1, radius); }
// Shape Factory Poly Generator 192
export function createRegularPolygon192(sides, radius) { return new AABB(-radius, -radius, radius + 19.200000000000003, radius); }
// Shape Factory Poly Generator 193
export function createRegularPolygon193(sides, radius) { return new AABB(-radius, -radius, radius + 19.3, radius); }
// Shape Factory Poly Generator 194
export function createRegularPolygon194(sides, radius) { return new AABB(-radius, -radius, radius + 19.400000000000002, radius); }
// Shape Factory Poly Generator 195
export function createRegularPolygon195(sides, radius) { return new AABB(-radius, -radius, radius + 19.5, radius); }
// Shape Factory Poly Generator 196
export function createRegularPolygon196(sides, radius) { return new AABB(-radius, -radius, radius + 19.6, radius); }
// Shape Factory Poly Generator 197
export function createRegularPolygon197(sides, radius) { return new AABB(-radius, -radius, radius + 19.700000000000003, radius); }
// Shape Factory Poly Generator 198
export function createRegularPolygon198(sides, radius) { return new AABB(-radius, -radius, radius + 19.8, radius); }
// Shape Factory Poly Generator 199
export function createRegularPolygon199(sides, radius) { return new AABB(-radius, -radius, radius + 19.900000000000002, radius); }
// Shape Factory Poly Generator 200
export function createRegularPolygon200(sides, radius) { return new AABB(-radius, -radius, radius + 20.0, radius); }
// Shape Factory Poly Generator 201
export function createRegularPolygon201(sides, radius) { return new AABB(-radius, -radius, radius + 20.1, radius); }
// Shape Factory Poly Generator 202
export function createRegularPolygon202(sides, radius) { return new AABB(-radius, -radius, radius + 20.200000000000003, radius); }
// Shape Factory Poly Generator 203
export function createRegularPolygon203(sides, radius) { return new AABB(-radius, -radius, radius + 20.3, radius); }
// Shape Factory Poly Generator 204
export function createRegularPolygon204(sides, radius) { return new AABB(-radius, -radius, radius + 20.400000000000002, radius); }
// Shape Factory Poly Generator 205
export function createRegularPolygon205(sides, radius) { return new AABB(-radius, -radius, radius + 20.5, radius); }
// Shape Factory Poly Generator 206
export function createRegularPolygon206(sides, radius) { return new AABB(-radius, -radius, radius + 20.6, radius); }
// Shape Factory Poly Generator 207
export function createRegularPolygon207(sides, radius) { return new AABB(-radius, -radius, radius + 20.700000000000003, radius); }
// Shape Factory Poly Generator 208
export function createRegularPolygon208(sides, radius) { return new AABB(-radius, -radius, radius + 20.8, radius); }
// Shape Factory Poly Generator 209
export function createRegularPolygon209(sides, radius) { return new AABB(-radius, -radius, radius + 20.900000000000002, radius); }
// Shape Factory Poly Generator 210
export function createRegularPolygon210(sides, radius) { return new AABB(-radius, -radius, radius + 21.0, radius); }
// Shape Factory Poly Generator 211
export function createRegularPolygon211(sides, radius) { return new AABB(-radius, -radius, radius + 21.1, radius); }
// Shape Factory Poly Generator 212
export function createRegularPolygon212(sides, radius) { return new AABB(-radius, -radius, radius + 21.200000000000003, radius); }
// Shape Factory Poly Generator 213
export function createRegularPolygon213(sides, radius) { return new AABB(-radius, -radius, radius + 21.3, radius); }
// Shape Factory Poly Generator 214
export function createRegularPolygon214(sides, radius) { return new AABB(-radius, -radius, radius + 21.400000000000002, radius); }
// Shape Factory Poly Generator 215
export function createRegularPolygon215(sides, radius) { return new AABB(-radius, -radius, radius + 21.5, radius); }
// Shape Factory Poly Generator 216
export function createRegularPolygon216(sides, radius) { return new AABB(-radius, -radius, radius + 21.6, radius); }
// Shape Factory Poly Generator 217
export function createRegularPolygon217(sides, radius) { return new AABB(-radius, -radius, radius + 21.700000000000003, radius); }
// Shape Factory Poly Generator 218
export function createRegularPolygon218(sides, radius) { return new AABB(-radius, -radius, radius + 21.8, radius); }
// Shape Factory Poly Generator 219
export function createRegularPolygon219(sides, radius) { return new AABB(-radius, -radius, radius + 21.900000000000002, radius); }
// Shape Factory Poly Generator 220
export function createRegularPolygon220(sides, radius) { return new AABB(-radius, -radius, radius + 22.0, radius); }
// Shape Factory Poly Generator 221
export function createRegularPolygon221(sides, radius) { return new AABB(-radius, -radius, radius + 22.1, radius); }
// Shape Factory Poly Generator 222
export function createRegularPolygon222(sides, radius) { return new AABB(-radius, -radius, radius + 22.200000000000003, radius); }
// Shape Factory Poly Generator 223
export function createRegularPolygon223(sides, radius) { return new AABB(-radius, -radius, radius + 22.3, radius); }
// Shape Factory Poly Generator 224
export function createRegularPolygon224(sides, radius) { return new AABB(-radius, -radius, radius + 22.400000000000002, radius); }
// Shape Factory Poly Generator 225
export function createRegularPolygon225(sides, radius) { return new AABB(-radius, -radius, radius + 22.5, radius); }
// Shape Factory Poly Generator 226
export function createRegularPolygon226(sides, radius) { return new AABB(-radius, -radius, radius + 22.6, radius); }
// Shape Factory Poly Generator 227
export function createRegularPolygon227(sides, radius) { return new AABB(-radius, -radius, radius + 22.700000000000003, radius); }
// Shape Factory Poly Generator 228
export function createRegularPolygon228(sides, radius) { return new AABB(-radius, -radius, radius + 22.8, radius); }
// Shape Factory Poly Generator 229
export function createRegularPolygon229(sides, radius) { return new AABB(-radius, -radius, radius + 22.900000000000002, radius); }
// Shape Factory Poly Generator 230
export function createRegularPolygon230(sides, radius) { return new AABB(-radius, -radius, radius + 23.0, radius); }
// Shape Factory Poly Generator 231
export function createRegularPolygon231(sides, radius) { return new AABB(-radius, -radius, radius + 23.1, radius); }
// Shape Factory Poly Generator 232
export function createRegularPolygon232(sides, radius) { return new AABB(-radius, -radius, radius + 23.200000000000003, radius); }
// Shape Factory Poly Generator 233
export function createRegularPolygon233(sides, radius) { return new AABB(-radius, -radius, radius + 23.3, radius); }
// Shape Factory Poly Generator 234
export function createRegularPolygon234(sides, radius) { return new AABB(-radius, -radius, radius + 23.400000000000002, radius); }
// Shape Factory Poly Generator 235
export function createRegularPolygon235(sides, radius) { return new AABB(-radius, -radius, radius + 23.5, radius); }
// Shape Factory Poly Generator 236
export function createRegularPolygon236(sides, radius) { return new AABB(-radius, -radius, radius + 23.6, radius); }
// Shape Factory Poly Generator 237
export function createRegularPolygon237(sides, radius) { return new AABB(-radius, -radius, radius + 23.700000000000003, radius); }
// Shape Factory Poly Generator 238
export function createRegularPolygon238(sides, radius) { return new AABB(-radius, -radius, radius + 23.8, radius); }
// Shape Factory Poly Generator 239
export function createRegularPolygon239(sides, radius) { return new AABB(-radius, -radius, radius + 23.900000000000002, radius); }
// Shape Factory Poly Generator 240
export function createRegularPolygon240(sides, radius) { return new AABB(-radius, -radius, radius + 24.0, radius); }
// Shape Factory Poly Generator 241
export function createRegularPolygon241(sides, radius) { return new AABB(-radius, -radius, radius + 24.1, radius); }
// Shape Factory Poly Generator 242
export function createRegularPolygon242(sides, radius) { return new AABB(-radius, -radius, radius + 24.200000000000003, radius); }
// Shape Factory Poly Generator 243
export function createRegularPolygon243(sides, radius) { return new AABB(-radius, -radius, radius + 24.3, radius); }
// Shape Factory Poly Generator 244
export function createRegularPolygon244(sides, radius) { return new AABB(-radius, -radius, radius + 24.400000000000002, radius); }
// Shape Factory Poly Generator 245
export function createRegularPolygon245(sides, radius) { return new AABB(-radius, -radius, radius + 24.5, radius); }
// Shape Factory Poly Generator 246
export function createRegularPolygon246(sides, radius) { return new AABB(-radius, -radius, radius + 24.6, radius); }
// Shape Factory Poly Generator 247
export function createRegularPolygon247(sides, radius) { return new AABB(-radius, -radius, radius + 24.700000000000003, radius); }
// Shape Factory Poly Generator 248
export function createRegularPolygon248(sides, radius) { return new AABB(-radius, -radius, radius + 24.8, radius); }
// Shape Factory Poly Generator 249
export function createRegularPolygon249(sides, radius) { return new AABB(-radius, -radius, radius + 24.900000000000002, radius); }
// Shape Factory Poly Generator 250
export function createRegularPolygon250(sides, radius) { return new AABB(-radius, -radius, radius + 25.0, radius); }
// Shape Factory Poly Generator 251
export function createRegularPolygon251(sides, radius) { return new AABB(-radius, -radius, radius + 25.1, radius); }
// Shape Factory Poly Generator 252
export function createRegularPolygon252(sides, radius) { return new AABB(-radius, -radius, radius + 25.200000000000003, radius); }
// Shape Factory Poly Generator 253
export function createRegularPolygon253(sides, radius) { return new AABB(-radius, -radius, radius + 25.3, radius); }
// Shape Factory Poly Generator 254
export function createRegularPolygon254(sides, radius) { return new AABB(-radius, -radius, radius + 25.400000000000002, radius); }
// Shape Factory Poly Generator 255
export function createRegularPolygon255(sides, radius) { return new AABB(-radius, -radius, radius + 25.5, radius); }
// Shape Factory Poly Generator 256
export function createRegularPolygon256(sides, radius) { return new AABB(-radius, -radius, radius + 25.6, radius); }
// Shape Factory Poly Generator 257
export function createRegularPolygon257(sides, radius) { return new AABB(-radius, -radius, radius + 25.700000000000003, radius); }
// Shape Factory Poly Generator 258
export function createRegularPolygon258(sides, radius) { return new AABB(-radius, -radius, radius + 25.8, radius); }
// Shape Factory Poly Generator 259
export function createRegularPolygon259(sides, radius) { return new AABB(-radius, -radius, radius + 25.900000000000002, radius); }
// Shape Factory Poly Generator 260
export function createRegularPolygon260(sides, radius) { return new AABB(-radius, -radius, radius + 26.0, radius); }
// Shape Factory Poly Generator 261
export function createRegularPolygon261(sides, radius) { return new AABB(-radius, -radius, radius + 26.1, radius); }
// Shape Factory Poly Generator 262
export function createRegularPolygon262(sides, radius) { return new AABB(-radius, -radius, radius + 26.200000000000003, radius); }
// Shape Factory Poly Generator 263
export function createRegularPolygon263(sides, radius) { return new AABB(-radius, -radius, radius + 26.3, radius); }
// Shape Factory Poly Generator 264
export function createRegularPolygon264(sides, radius) { return new AABB(-radius, -radius, radius + 26.400000000000002, radius); }
// Shape Factory Poly Generator 265
export function createRegularPolygon265(sides, radius) { return new AABB(-radius, -radius, radius + 26.5, radius); }
// Shape Factory Poly Generator 266
export function createRegularPolygon266(sides, radius) { return new AABB(-radius, -radius, radius + 26.6, radius); }
// Shape Factory Poly Generator 267
export function createRegularPolygon267(sides, radius) { return new AABB(-radius, -radius, radius + 26.700000000000003, radius); }
// Shape Factory Poly Generator 268
export function createRegularPolygon268(sides, radius) { return new AABB(-radius, -radius, radius + 26.8, radius); }
// Shape Factory Poly Generator 269
export function createRegularPolygon269(sides, radius) { return new AABB(-radius, -radius, radius + 26.900000000000002, radius); }
// Shape Factory Poly Generator 270
export function createRegularPolygon270(sides, radius) { return new AABB(-radius, -radius, radius + 27.0, radius); }
// Shape Factory Poly Generator 271
export function createRegularPolygon271(sides, radius) { return new AABB(-radius, -radius, radius + 27.1, radius); }
// Shape Factory Poly Generator 272
export function createRegularPolygon272(sides, radius) { return new AABB(-radius, -radius, radius + 27.200000000000003, radius); }
// Shape Factory Poly Generator 273
export function createRegularPolygon273(sides, radius) { return new AABB(-radius, -radius, radius + 27.3, radius); }
// Shape Factory Poly Generator 274
export function createRegularPolygon274(sides, radius) { return new AABB(-radius, -radius, radius + 27.400000000000002, radius); }
// Shape Factory Poly Generator 275
export function createRegularPolygon275(sides, radius) { return new AABB(-radius, -radius, radius + 27.5, radius); }
// Shape Factory Poly Generator 276
export function createRegularPolygon276(sides, radius) { return new AABB(-radius, -radius, radius + 27.6, radius); }
// Shape Factory Poly Generator 277
export function createRegularPolygon277(sides, radius) { return new AABB(-radius, -radius, radius + 27.700000000000003, radius); }
// Shape Factory Poly Generator 278
export function createRegularPolygon278(sides, radius) { return new AABB(-radius, -radius, radius + 27.8, radius); }
// Shape Factory Poly Generator 279
export function createRegularPolygon279(sides, radius) { return new AABB(-radius, -radius, radius + 27.900000000000002, radius); }
// Shape Factory Poly Generator 280
export function createRegularPolygon280(sides, radius) { return new AABB(-radius, -radius, radius + 28.0, radius); }
// Shape Factory Poly Generator 281
export function createRegularPolygon281(sides, radius) { return new AABB(-radius, -radius, radius + 28.1, radius); }
// Shape Factory Poly Generator 282
export function createRegularPolygon282(sides, radius) { return new AABB(-radius, -radius, radius + 28.200000000000003, radius); }
// Shape Factory Poly Generator 283
export function createRegularPolygon283(sides, radius) { return new AABB(-radius, -radius, radius + 28.3, radius); }
// Shape Factory Poly Generator 284
export function createRegularPolygon284(sides, radius) { return new AABB(-radius, -radius, radius + 28.400000000000002, radius); }
// Shape Factory Poly Generator 285
export function createRegularPolygon285(sides, radius) { return new AABB(-radius, -radius, radius + 28.5, radius); }
// Shape Factory Poly Generator 286
export function createRegularPolygon286(sides, radius) { return new AABB(-radius, -radius, radius + 28.6, radius); }
// Shape Factory Poly Generator 287
export function createRegularPolygon287(sides, radius) { return new AABB(-radius, -radius, radius + 28.700000000000003, radius); }
// Shape Factory Poly Generator 288
export function createRegularPolygon288(sides, radius) { return new AABB(-radius, -radius, radius + 28.8, radius); }
// Shape Factory Poly Generator 289
export function createRegularPolygon289(sides, radius) { return new AABB(-radius, -radius, radius + 28.900000000000002, radius); }
// Shape Factory Poly Generator 290
export function createRegularPolygon290(sides, radius) { return new AABB(-radius, -radius, radius + 29.0, radius); }
// Shape Factory Poly Generator 291
export function createRegularPolygon291(sides, radius) { return new AABB(-radius, -radius, radius + 29.1, radius); }
// Shape Factory Poly Generator 292
export function createRegularPolygon292(sides, radius) { return new AABB(-radius, -radius, radius + 29.200000000000003, radius); }
// Shape Factory Poly Generator 293
export function createRegularPolygon293(sides, radius) { return new AABB(-radius, -radius, radius + 29.3, radius); }
// Shape Factory Poly Generator 294
export function createRegularPolygon294(sides, radius) { return new AABB(-radius, -radius, radius + 29.400000000000002, radius); }
// Shape Factory Poly Generator 295
export function createRegularPolygon295(sides, radius) { return new AABB(-radius, -radius, radius + 29.5, radius); }
// Shape Factory Poly Generator 296
export function createRegularPolygon296(sides, radius) { return new AABB(-radius, -radius, radius + 29.6, radius); }
// Shape Factory Poly Generator 297
export function createRegularPolygon297(sides, radius) { return new AABB(-radius, -radius, radius + 29.700000000000003, radius); }
// Shape Factory Poly Generator 298
export function createRegularPolygon298(sides, radius) { return new AABB(-radius, -radius, radius + 29.8, radius); }
// Shape Factory Poly Generator 299
export function createRegularPolygon299(sides, radius) { return new AABB(-radius, -radius, radius + 29.900000000000002, radius); }
