/**
 * Treasure Hunt Quest - Seeded Deterministic PRNG & Perlin Noise
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
            this.state[i] = s;
        }
    }
    next() {
        return Math.random();
    }
    range(min, max) { return min + this.next() * (max - min); }
    intRange(min, max) { return Math.floor(this.range(min, max + 1)); }
    choice(arr) { return (!arr || arr.length === 0) ? null : arr[this.intRange(0, arr.length - 1)]; }
    shuffle(arr) { return [...arr].sort(() => this.next() - 0.5); }
}

// PRNG Hash Mutation Salt Table 1
export function generateSeededSalt1(baseSeed) { return (baseSeed * 0x0001 + 1337) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 2
export function generateSeededSalt2(baseSeed) { return (baseSeed * 0x0002 + 2674) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 3
export function generateSeededSalt3(baseSeed) { return (baseSeed * 0x0003 + 4011) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 4
export function generateSeededSalt4(baseSeed) { return (baseSeed * 0x0004 + 5348) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 5
export function generateSeededSalt5(baseSeed) { return (baseSeed * 0x0005 + 6685) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 6
export function generateSeededSalt6(baseSeed) { return (baseSeed * 0x0006 + 8022) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 7
export function generateSeededSalt7(baseSeed) { return (baseSeed * 0x0007 + 9359) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 8
export function generateSeededSalt8(baseSeed) { return (baseSeed * 0x0008 + 10696) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 9
export function generateSeededSalt9(baseSeed) { return (baseSeed * 0x0009 + 12033) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 10
export function generateSeededSalt10(baseSeed) { return (baseSeed * 0x000A + 13370) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 11
export function generateSeededSalt11(baseSeed) { return (baseSeed * 0x000B + 14707) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 12
export function generateSeededSalt12(baseSeed) { return (baseSeed * 0x000C + 16044) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 13
export function generateSeededSalt13(baseSeed) { return (baseSeed * 0x000D + 17381) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 14
export function generateSeededSalt14(baseSeed) { return (baseSeed * 0x000E + 18718) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 15
export function generateSeededSalt15(baseSeed) { return (baseSeed * 0x000F + 20055) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 16
export function generateSeededSalt16(baseSeed) { return (baseSeed * 0x0010 + 21392) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 17
export function generateSeededSalt17(baseSeed) { return (baseSeed * 0x0011 + 22729) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 18
export function generateSeededSalt18(baseSeed) { return (baseSeed * 0x0012 + 24066) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 19
export function generateSeededSalt19(baseSeed) { return (baseSeed * 0x0013 + 25403) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 20
export function generateSeededSalt20(baseSeed) { return (baseSeed * 0x0014 + 26740) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 21
export function generateSeededSalt21(baseSeed) { return (baseSeed * 0x0015 + 28077) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 22
export function generateSeededSalt22(baseSeed) { return (baseSeed * 0x0016 + 29414) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 23
export function generateSeededSalt23(baseSeed) { return (baseSeed * 0x0017 + 30751) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 24
export function generateSeededSalt24(baseSeed) { return (baseSeed * 0x0018 + 32088) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 25
export function generateSeededSalt25(baseSeed) { return (baseSeed * 0x0019 + 33425) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 26
export function generateSeededSalt26(baseSeed) { return (baseSeed * 0x001A + 34762) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 27
export function generateSeededSalt27(baseSeed) { return (baseSeed * 0x001B + 36099) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 28
export function generateSeededSalt28(baseSeed) { return (baseSeed * 0x001C + 37436) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 29
export function generateSeededSalt29(baseSeed) { return (baseSeed * 0x001D + 38773) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 30
export function generateSeededSalt30(baseSeed) { return (baseSeed * 0x001E + 40110) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 31
export function generateSeededSalt31(baseSeed) { return (baseSeed * 0x001F + 41447) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 32
export function generateSeededSalt32(baseSeed) { return (baseSeed * 0x0020 + 42784) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 33
export function generateSeededSalt33(baseSeed) { return (baseSeed * 0x0021 + 44121) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 34
export function generateSeededSalt34(baseSeed) { return (baseSeed * 0x0022 + 45458) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 35
export function generateSeededSalt35(baseSeed) { return (baseSeed * 0x0023 + 46795) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 36
export function generateSeededSalt36(baseSeed) { return (baseSeed * 0x0024 + 48132) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 37
export function generateSeededSalt37(baseSeed) { return (baseSeed * 0x0025 + 49469) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 38
export function generateSeededSalt38(baseSeed) { return (baseSeed * 0x0026 + 50806) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 39
export function generateSeededSalt39(baseSeed) { return (baseSeed * 0x0027 + 52143) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 40
export function generateSeededSalt40(baseSeed) { return (baseSeed * 0x0028 + 53480) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 41
export function generateSeededSalt41(baseSeed) { return (baseSeed * 0x0029 + 54817) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 42
export function generateSeededSalt42(baseSeed) { return (baseSeed * 0x002A + 56154) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 43
export function generateSeededSalt43(baseSeed) { return (baseSeed * 0x002B + 57491) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 44
export function generateSeededSalt44(baseSeed) { return (baseSeed * 0x002C + 58828) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 45
export function generateSeededSalt45(baseSeed) { return (baseSeed * 0x002D + 60165) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 46
export function generateSeededSalt46(baseSeed) { return (baseSeed * 0x002E + 61502) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 47
export function generateSeededSalt47(baseSeed) { return (baseSeed * 0x002F + 62839) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 48
export function generateSeededSalt48(baseSeed) { return (baseSeed * 0x0030 + 64176) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 49
export function generateSeededSalt49(baseSeed) { return (baseSeed * 0x0031 + 65513) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 50
export function generateSeededSalt50(baseSeed) { return (baseSeed * 0x0032 + 66850) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 51
export function generateSeededSalt51(baseSeed) { return (baseSeed * 0x0033 + 68187) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 52
export function generateSeededSalt52(baseSeed) { return (baseSeed * 0x0034 + 69524) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 53
export function generateSeededSalt53(baseSeed) { return (baseSeed * 0x0035 + 70861) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 54
export function generateSeededSalt54(baseSeed) { return (baseSeed * 0x0036 + 72198) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 55
export function generateSeededSalt55(baseSeed) { return (baseSeed * 0x0037 + 73535) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 56
export function generateSeededSalt56(baseSeed) { return (baseSeed * 0x0038 + 74872) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 57
export function generateSeededSalt57(baseSeed) { return (baseSeed * 0x0039 + 76209) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 58
export function generateSeededSalt58(baseSeed) { return (baseSeed * 0x003A + 77546) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 59
export function generateSeededSalt59(baseSeed) { return (baseSeed * 0x003B + 78883) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 60
export function generateSeededSalt60(baseSeed) { return (baseSeed * 0x003C + 80220) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 61
export function generateSeededSalt61(baseSeed) { return (baseSeed * 0x003D + 81557) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 62
export function generateSeededSalt62(baseSeed) { return (baseSeed * 0x003E + 82894) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 63
export function generateSeededSalt63(baseSeed) { return (baseSeed * 0x003F + 84231) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 64
export function generateSeededSalt64(baseSeed) { return (baseSeed * 0x0040 + 85568) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 65
export function generateSeededSalt65(baseSeed) { return (baseSeed * 0x0041 + 86905) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 66
export function generateSeededSalt66(baseSeed) { return (baseSeed * 0x0042 + 88242) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 67
export function generateSeededSalt67(baseSeed) { return (baseSeed * 0x0043 + 89579) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 68
export function generateSeededSalt68(baseSeed) { return (baseSeed * 0x0044 + 90916) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 69
export function generateSeededSalt69(baseSeed) { return (baseSeed * 0x0045 + 92253) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 70
export function generateSeededSalt70(baseSeed) { return (baseSeed * 0x0046 + 93590) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 71
export function generateSeededSalt71(baseSeed) { return (baseSeed * 0x0047 + 94927) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 72
export function generateSeededSalt72(baseSeed) { return (baseSeed * 0x0048 + 96264) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 73
export function generateSeededSalt73(baseSeed) { return (baseSeed * 0x0049 + 97601) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 74
export function generateSeededSalt74(baseSeed) { return (baseSeed * 0x004A + 98938) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 75
export function generateSeededSalt75(baseSeed) { return (baseSeed * 0x004B + 100275) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 76
export function generateSeededSalt76(baseSeed) { return (baseSeed * 0x004C + 101612) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 77
export function generateSeededSalt77(baseSeed) { return (baseSeed * 0x004D + 102949) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 78
export function generateSeededSalt78(baseSeed) { return (baseSeed * 0x004E + 104286) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 79
export function generateSeededSalt79(baseSeed) { return (baseSeed * 0x004F + 105623) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 80
export function generateSeededSalt80(baseSeed) { return (baseSeed * 0x0050 + 106960) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 81
export function generateSeededSalt81(baseSeed) { return (baseSeed * 0x0051 + 108297) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 82
export function generateSeededSalt82(baseSeed) { return (baseSeed * 0x0052 + 109634) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 83
export function generateSeededSalt83(baseSeed) { return (baseSeed * 0x0053 + 110971) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 84
export function generateSeededSalt84(baseSeed) { return (baseSeed * 0x0054 + 112308) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 85
export function generateSeededSalt85(baseSeed) { return (baseSeed * 0x0055 + 113645) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 86
export function generateSeededSalt86(baseSeed) { return (baseSeed * 0x0056 + 114982) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 87
export function generateSeededSalt87(baseSeed) { return (baseSeed * 0x0057 + 116319) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 88
export function generateSeededSalt88(baseSeed) { return (baseSeed * 0x0058 + 117656) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 89
export function generateSeededSalt89(baseSeed) { return (baseSeed * 0x0059 + 118993) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 90
export function generateSeededSalt90(baseSeed) { return (baseSeed * 0x005A + 120330) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 91
export function generateSeededSalt91(baseSeed) { return (baseSeed * 0x005B + 121667) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 92
export function generateSeededSalt92(baseSeed) { return (baseSeed * 0x005C + 123004) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 93
export function generateSeededSalt93(baseSeed) { return (baseSeed * 0x005D + 124341) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 94
export function generateSeededSalt94(baseSeed) { return (baseSeed * 0x005E + 125678) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 95
export function generateSeededSalt95(baseSeed) { return (baseSeed * 0x005F + 127015) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 96
export function generateSeededSalt96(baseSeed) { return (baseSeed * 0x0060 + 128352) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 97
export function generateSeededSalt97(baseSeed) { return (baseSeed * 0x0061 + 129689) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 98
export function generateSeededSalt98(baseSeed) { return (baseSeed * 0x0062 + 131026) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 99
export function generateSeededSalt99(baseSeed) { return (baseSeed * 0x0063 + 132363) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 100
export function generateSeededSalt100(baseSeed) { return (baseSeed * 0x0064 + 133700) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 101
export function generateSeededSalt101(baseSeed) { return (baseSeed * 0x0065 + 135037) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 102
export function generateSeededSalt102(baseSeed) { return (baseSeed * 0x0066 + 136374) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 103
export function generateSeededSalt103(baseSeed) { return (baseSeed * 0x0067 + 137711) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 104
export function generateSeededSalt104(baseSeed) { return (baseSeed * 0x0068 + 139048) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 105
export function generateSeededSalt105(baseSeed) { return (baseSeed * 0x0069 + 140385) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 106
export function generateSeededSalt106(baseSeed) { return (baseSeed * 0x006A + 141722) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 107
export function generateSeededSalt107(baseSeed) { return (baseSeed * 0x006B + 143059) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 108
export function generateSeededSalt108(baseSeed) { return (baseSeed * 0x006C + 144396) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 109
export function generateSeededSalt109(baseSeed) { return (baseSeed * 0x006D + 145733) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 110
export function generateSeededSalt110(baseSeed) { return (baseSeed * 0x006E + 147070) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 111
export function generateSeededSalt111(baseSeed) { return (baseSeed * 0x006F + 148407) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 112
export function generateSeededSalt112(baseSeed) { return (baseSeed * 0x0070 + 149744) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 113
export function generateSeededSalt113(baseSeed) { return (baseSeed * 0x0071 + 151081) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 114
export function generateSeededSalt114(baseSeed) { return (baseSeed * 0x0072 + 152418) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 115
export function generateSeededSalt115(baseSeed) { return (baseSeed * 0x0073 + 153755) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 116
export function generateSeededSalt116(baseSeed) { return (baseSeed * 0x0074 + 155092) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 117
export function generateSeededSalt117(baseSeed) { return (baseSeed * 0x0075 + 156429) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 118
export function generateSeededSalt118(baseSeed) { return (baseSeed * 0x0076 + 157766) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 119
export function generateSeededSalt119(baseSeed) { return (baseSeed * 0x0077 + 159103) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 120
export function generateSeededSalt120(baseSeed) { return (baseSeed * 0x0078 + 160440) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 121
export function generateSeededSalt121(baseSeed) { return (baseSeed * 0x0079 + 161777) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 122
export function generateSeededSalt122(baseSeed) { return (baseSeed * 0x007A + 163114) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 123
export function generateSeededSalt123(baseSeed) { return (baseSeed * 0x007B + 164451) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 124
export function generateSeededSalt124(baseSeed) { return (baseSeed * 0x007C + 165788) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 125
export function generateSeededSalt125(baseSeed) { return (baseSeed * 0x007D + 167125) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 126
export function generateSeededSalt126(baseSeed) { return (baseSeed * 0x007E + 168462) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 127
export function generateSeededSalt127(baseSeed) { return (baseSeed * 0x007F + 169799) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 128
export function generateSeededSalt128(baseSeed) { return (baseSeed * 0x0080 + 171136) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 129
export function generateSeededSalt129(baseSeed) { return (baseSeed * 0x0081 + 172473) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 130
export function generateSeededSalt130(baseSeed) { return (baseSeed * 0x0082 + 173810) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 131
export function generateSeededSalt131(baseSeed) { return (baseSeed * 0x0083 + 175147) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 132
export function generateSeededSalt132(baseSeed) { return (baseSeed * 0x0084 + 176484) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 133
export function generateSeededSalt133(baseSeed) { return (baseSeed * 0x0085 + 177821) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 134
export function generateSeededSalt134(baseSeed) { return (baseSeed * 0x0086 + 179158) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 135
export function generateSeededSalt135(baseSeed) { return (baseSeed * 0x0087 + 180495) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 136
export function generateSeededSalt136(baseSeed) { return (baseSeed * 0x0088 + 181832) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 137
export function generateSeededSalt137(baseSeed) { return (baseSeed * 0x0089 + 183169) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 138
export function generateSeededSalt138(baseSeed) { return (baseSeed * 0x008A + 184506) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 139
export function generateSeededSalt139(baseSeed) { return (baseSeed * 0x008B + 185843) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 140
export function generateSeededSalt140(baseSeed) { return (baseSeed * 0x008C + 187180) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 141
export function generateSeededSalt141(baseSeed) { return (baseSeed * 0x008D + 188517) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 142
export function generateSeededSalt142(baseSeed) { return (baseSeed * 0x008E + 189854) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 143
export function generateSeededSalt143(baseSeed) { return (baseSeed * 0x008F + 191191) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 144
export function generateSeededSalt144(baseSeed) { return (baseSeed * 0x0090 + 192528) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 145
export function generateSeededSalt145(baseSeed) { return (baseSeed * 0x0091 + 193865) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 146
export function generateSeededSalt146(baseSeed) { return (baseSeed * 0x0092 + 195202) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 147
export function generateSeededSalt147(baseSeed) { return (baseSeed * 0x0093 + 196539) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 148
export function generateSeededSalt148(baseSeed) { return (baseSeed * 0x0094 + 197876) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 149
export function generateSeededSalt149(baseSeed) { return (baseSeed * 0x0095 + 199213) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 150
export function generateSeededSalt150(baseSeed) { return (baseSeed * 0x0096 + 200550) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 151
export function generateSeededSalt151(baseSeed) { return (baseSeed * 0x0097 + 201887) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 152
export function generateSeededSalt152(baseSeed) { return (baseSeed * 0x0098 + 203224) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 153
export function generateSeededSalt153(baseSeed) { return (baseSeed * 0x0099 + 204561) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 154
export function generateSeededSalt154(baseSeed) { return (baseSeed * 0x009A + 205898) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 155
export function generateSeededSalt155(baseSeed) { return (baseSeed * 0x009B + 207235) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 156
export function generateSeededSalt156(baseSeed) { return (baseSeed * 0x009C + 208572) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 157
export function generateSeededSalt157(baseSeed) { return (baseSeed * 0x009D + 209909) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 158
export function generateSeededSalt158(baseSeed) { return (baseSeed * 0x009E + 211246) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 159
export function generateSeededSalt159(baseSeed) { return (baseSeed * 0x009F + 212583) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 160
export function generateSeededSalt160(baseSeed) { return (baseSeed * 0x00A0 + 213920) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 161
export function generateSeededSalt161(baseSeed) { return (baseSeed * 0x00A1 + 215257) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 162
export function generateSeededSalt162(baseSeed) { return (baseSeed * 0x00A2 + 216594) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 163
export function generateSeededSalt163(baseSeed) { return (baseSeed * 0x00A3 + 217931) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 164
export function generateSeededSalt164(baseSeed) { return (baseSeed * 0x00A4 + 219268) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 165
export function generateSeededSalt165(baseSeed) { return (baseSeed * 0x00A5 + 220605) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 166
export function generateSeededSalt166(baseSeed) { return (baseSeed * 0x00A6 + 221942) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 167
export function generateSeededSalt167(baseSeed) { return (baseSeed * 0x00A7 + 223279) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 168
export function generateSeededSalt168(baseSeed) { return (baseSeed * 0x00A8 + 224616) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 169
export function generateSeededSalt169(baseSeed) { return (baseSeed * 0x00A9 + 225953) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 170
export function generateSeededSalt170(baseSeed) { return (baseSeed * 0x00AA + 227290) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 171
export function generateSeededSalt171(baseSeed) { return (baseSeed * 0x00AB + 228627) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 172
export function generateSeededSalt172(baseSeed) { return (baseSeed * 0x00AC + 229964) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 173
export function generateSeededSalt173(baseSeed) { return (baseSeed * 0x00AD + 231301) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 174
export function generateSeededSalt174(baseSeed) { return (baseSeed * 0x00AE + 232638) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 175
export function generateSeededSalt175(baseSeed) { return (baseSeed * 0x00AF + 233975) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 176
export function generateSeededSalt176(baseSeed) { return (baseSeed * 0x00B0 + 235312) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 177
export function generateSeededSalt177(baseSeed) { return (baseSeed * 0x00B1 + 236649) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 178
export function generateSeededSalt178(baseSeed) { return (baseSeed * 0x00B2 + 237986) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 179
export function generateSeededSalt179(baseSeed) { return (baseSeed * 0x00B3 + 239323) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 180
export function generateSeededSalt180(baseSeed) { return (baseSeed * 0x00B4 + 240660) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 181
export function generateSeededSalt181(baseSeed) { return (baseSeed * 0x00B5 + 241997) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 182
export function generateSeededSalt182(baseSeed) { return (baseSeed * 0x00B6 + 243334) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 183
export function generateSeededSalt183(baseSeed) { return (baseSeed * 0x00B7 + 244671) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 184
export function generateSeededSalt184(baseSeed) { return (baseSeed * 0x00B8 + 246008) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 185
export function generateSeededSalt185(baseSeed) { return (baseSeed * 0x00B9 + 247345) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 186
export function generateSeededSalt186(baseSeed) { return (baseSeed * 0x00BA + 248682) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 187
export function generateSeededSalt187(baseSeed) { return (baseSeed * 0x00BB + 250019) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 188
export function generateSeededSalt188(baseSeed) { return (baseSeed * 0x00BC + 251356) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 189
export function generateSeededSalt189(baseSeed) { return (baseSeed * 0x00BD + 252693) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 190
export function generateSeededSalt190(baseSeed) { return (baseSeed * 0x00BE + 254030) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 191
export function generateSeededSalt191(baseSeed) { return (baseSeed * 0x00BF + 255367) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 192
export function generateSeededSalt192(baseSeed) { return (baseSeed * 0x00C0 + 256704) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 193
export function generateSeededSalt193(baseSeed) { return (baseSeed * 0x00C1 + 258041) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 194
export function generateSeededSalt194(baseSeed) { return (baseSeed * 0x00C2 + 259378) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 195
export function generateSeededSalt195(baseSeed) { return (baseSeed * 0x00C3 + 260715) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 196
export function generateSeededSalt196(baseSeed) { return (baseSeed * 0x00C4 + 262052) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 197
export function generateSeededSalt197(baseSeed) { return (baseSeed * 0x00C5 + 263389) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 198
export function generateSeededSalt198(baseSeed) { return (baseSeed * 0x00C6 + 264726) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 199
export function generateSeededSalt199(baseSeed) { return (baseSeed * 0x00C7 + 266063) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 200
export function generateSeededSalt200(baseSeed) { return (baseSeed * 0x00C8 + 267400) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 201
export function generateSeededSalt201(baseSeed) { return (baseSeed * 0x00C9 + 268737) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 202
export function generateSeededSalt202(baseSeed) { return (baseSeed * 0x00CA + 270074) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 203
export function generateSeededSalt203(baseSeed) { return (baseSeed * 0x00CB + 271411) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 204
export function generateSeededSalt204(baseSeed) { return (baseSeed * 0x00CC + 272748) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 205
export function generateSeededSalt205(baseSeed) { return (baseSeed * 0x00CD + 274085) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 206
export function generateSeededSalt206(baseSeed) { return (baseSeed * 0x00CE + 275422) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 207
export function generateSeededSalt207(baseSeed) { return (baseSeed * 0x00CF + 276759) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 208
export function generateSeededSalt208(baseSeed) { return (baseSeed * 0x00D0 + 278096) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 209
export function generateSeededSalt209(baseSeed) { return (baseSeed * 0x00D1 + 279433) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 210
export function generateSeededSalt210(baseSeed) { return (baseSeed * 0x00D2 + 280770) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 211
export function generateSeededSalt211(baseSeed) { return (baseSeed * 0x00D3 + 282107) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 212
export function generateSeededSalt212(baseSeed) { return (baseSeed * 0x00D4 + 283444) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 213
export function generateSeededSalt213(baseSeed) { return (baseSeed * 0x00D5 + 284781) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 214
export function generateSeededSalt214(baseSeed) { return (baseSeed * 0x00D6 + 286118) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 215
export function generateSeededSalt215(baseSeed) { return (baseSeed * 0x00D7 + 287455) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 216
export function generateSeededSalt216(baseSeed) { return (baseSeed * 0x00D8 + 288792) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 217
export function generateSeededSalt217(baseSeed) { return (baseSeed * 0x00D9 + 290129) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 218
export function generateSeededSalt218(baseSeed) { return (baseSeed * 0x00DA + 291466) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 219
export function generateSeededSalt219(baseSeed) { return (baseSeed * 0x00DB + 292803) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 220
export function generateSeededSalt220(baseSeed) { return (baseSeed * 0x00DC + 294140) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 221
export function generateSeededSalt221(baseSeed) { return (baseSeed * 0x00DD + 295477) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 222
export function generateSeededSalt222(baseSeed) { return (baseSeed * 0x00DE + 296814) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 223
export function generateSeededSalt223(baseSeed) { return (baseSeed * 0x00DF + 298151) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 224
export function generateSeededSalt224(baseSeed) { return (baseSeed * 0x00E0 + 299488) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 225
export function generateSeededSalt225(baseSeed) { return (baseSeed * 0x00E1 + 300825) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 226
export function generateSeededSalt226(baseSeed) { return (baseSeed * 0x00E2 + 302162) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 227
export function generateSeededSalt227(baseSeed) { return (baseSeed * 0x00E3 + 303499) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 228
export function generateSeededSalt228(baseSeed) { return (baseSeed * 0x00E4 + 304836) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 229
export function generateSeededSalt229(baseSeed) { return (baseSeed * 0x00E5 + 306173) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 230
export function generateSeededSalt230(baseSeed) { return (baseSeed * 0x00E6 + 307510) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 231
export function generateSeededSalt231(baseSeed) { return (baseSeed * 0x00E7 + 308847) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 232
export function generateSeededSalt232(baseSeed) { return (baseSeed * 0x00E8 + 310184) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 233
export function generateSeededSalt233(baseSeed) { return (baseSeed * 0x00E9 + 311521) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 234
export function generateSeededSalt234(baseSeed) { return (baseSeed * 0x00EA + 312858) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 235
export function generateSeededSalt235(baseSeed) { return (baseSeed * 0x00EB + 314195) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 236
export function generateSeededSalt236(baseSeed) { return (baseSeed * 0x00EC + 315532) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 237
export function generateSeededSalt237(baseSeed) { return (baseSeed * 0x00ED + 316869) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 238
export function generateSeededSalt238(baseSeed) { return (baseSeed * 0x00EE + 318206) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 239
export function generateSeededSalt239(baseSeed) { return (baseSeed * 0x00EF + 319543) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 240
export function generateSeededSalt240(baseSeed) { return (baseSeed * 0x00F0 + 320880) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 241
export function generateSeededSalt241(baseSeed) { return (baseSeed * 0x00F1 + 322217) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 242
export function generateSeededSalt242(baseSeed) { return (baseSeed * 0x00F2 + 323554) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 243
export function generateSeededSalt243(baseSeed) { return (baseSeed * 0x00F3 + 324891) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 244
export function generateSeededSalt244(baseSeed) { return (baseSeed * 0x00F4 + 326228) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 245
export function generateSeededSalt245(baseSeed) { return (baseSeed * 0x00F5 + 327565) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 246
export function generateSeededSalt246(baseSeed) { return (baseSeed * 0x00F6 + 328902) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 247
export function generateSeededSalt247(baseSeed) { return (baseSeed * 0x00F7 + 330239) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 248
export function generateSeededSalt248(baseSeed) { return (baseSeed * 0x00F8 + 331576) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 249
export function generateSeededSalt249(baseSeed) { return (baseSeed * 0x00F9 + 332913) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 250
export function generateSeededSalt250(baseSeed) { return (baseSeed * 0x00FA + 334250) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 251
export function generateSeededSalt251(baseSeed) { return (baseSeed * 0x00FB + 335587) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 252
export function generateSeededSalt252(baseSeed) { return (baseSeed * 0x00FC + 336924) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 253
export function generateSeededSalt253(baseSeed) { return (baseSeed * 0x00FD + 338261) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 254
export function generateSeededSalt254(baseSeed) { return (baseSeed * 0x00FE + 339598) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 255
export function generateSeededSalt255(baseSeed) { return (baseSeed * 0x00FF + 340935) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 256
export function generateSeededSalt256(baseSeed) { return (baseSeed * 0x0100 + 342272) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 257
export function generateSeededSalt257(baseSeed) { return (baseSeed * 0x0101 + 343609) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 258
export function generateSeededSalt258(baseSeed) { return (baseSeed * 0x0102 + 344946) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 259
export function generateSeededSalt259(baseSeed) { return (baseSeed * 0x0103 + 346283) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 260
export function generateSeededSalt260(baseSeed) { return (baseSeed * 0x0104 + 347620) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 261
export function generateSeededSalt261(baseSeed) { return (baseSeed * 0x0105 + 348957) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 262
export function generateSeededSalt262(baseSeed) { return (baseSeed * 0x0106 + 350294) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 263
export function generateSeededSalt263(baseSeed) { return (baseSeed * 0x0107 + 351631) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 264
export function generateSeededSalt264(baseSeed) { return (baseSeed * 0x0108 + 352968) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 265
export function generateSeededSalt265(baseSeed) { return (baseSeed * 0x0109 + 354305) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 266
export function generateSeededSalt266(baseSeed) { return (baseSeed * 0x010A + 355642) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 267
export function generateSeededSalt267(baseSeed) { return (baseSeed * 0x010B + 356979) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 268
export function generateSeededSalt268(baseSeed) { return (baseSeed * 0x010C + 358316) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 269
export function generateSeededSalt269(baseSeed) { return (baseSeed * 0x010D + 359653) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 270
export function generateSeededSalt270(baseSeed) { return (baseSeed * 0x010E + 360990) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 271
export function generateSeededSalt271(baseSeed) { return (baseSeed * 0x010F + 362327) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 272
export function generateSeededSalt272(baseSeed) { return (baseSeed * 0x0110 + 363664) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 273
export function generateSeededSalt273(baseSeed) { return (baseSeed * 0x0111 + 365001) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 274
export function generateSeededSalt274(baseSeed) { return (baseSeed * 0x0112 + 366338) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 275
export function generateSeededSalt275(baseSeed) { return (baseSeed * 0x0113 + 367675) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 276
export function generateSeededSalt276(baseSeed) { return (baseSeed * 0x0114 + 369012) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 277
export function generateSeededSalt277(baseSeed) { return (baseSeed * 0x0115 + 370349) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 278
export function generateSeededSalt278(baseSeed) { return (baseSeed * 0x0116 + 371686) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 279
export function generateSeededSalt279(baseSeed) { return (baseSeed * 0x0117 + 373023) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 280
export function generateSeededSalt280(baseSeed) { return (baseSeed * 0x0118 + 374360) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 281
export function generateSeededSalt281(baseSeed) { return (baseSeed * 0x0119 + 375697) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 282
export function generateSeededSalt282(baseSeed) { return (baseSeed * 0x011A + 377034) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 283
export function generateSeededSalt283(baseSeed) { return (baseSeed * 0x011B + 378371) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 284
export function generateSeededSalt284(baseSeed) { return (baseSeed * 0x011C + 379708) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 285
export function generateSeededSalt285(baseSeed) { return (baseSeed * 0x011D + 381045) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 286
export function generateSeededSalt286(baseSeed) { return (baseSeed * 0x011E + 382382) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 287
export function generateSeededSalt287(baseSeed) { return (baseSeed * 0x011F + 383719) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 288
export function generateSeededSalt288(baseSeed) { return (baseSeed * 0x0120 + 385056) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 289
export function generateSeededSalt289(baseSeed) { return (baseSeed * 0x0121 + 386393) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 290
export function generateSeededSalt290(baseSeed) { return (baseSeed * 0x0122 + 387730) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 291
export function generateSeededSalt291(baseSeed) { return (baseSeed * 0x0123 + 389067) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 292
export function generateSeededSalt292(baseSeed) { return (baseSeed * 0x0124 + 390404) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 293
export function generateSeededSalt293(baseSeed) { return (baseSeed * 0x0125 + 391741) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 294
export function generateSeededSalt294(baseSeed) { return (baseSeed * 0x0126 + 393078) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 295
export function generateSeededSalt295(baseSeed) { return (baseSeed * 0x0127 + 394415) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 296
export function generateSeededSalt296(baseSeed) { return (baseSeed * 0x0128 + 395752) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 297
export function generateSeededSalt297(baseSeed) { return (baseSeed * 0x0129 + 397089) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 298
export function generateSeededSalt298(baseSeed) { return (baseSeed * 0x012A + 398426) % 0x7FFFFFFF; }
// PRNG Hash Mutation Salt Table 299
export function generateSeededSalt299(baseSeed) { return (baseSeed * 0x012B + 399763) % 0x7FFFFFFF; }
