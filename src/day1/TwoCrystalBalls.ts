export default function two_crystal_balls(breaks: boolean[]): number {
    const jumpSize = Math.floor(Math.sqrt(breaks.length));
    let firstBrokenIdx = 0;
    for (let i = 0; i < breaks.length; i += jumpSize) {
        if (breaks[i]) {
            firstBrokenIdx = i;
            break;
        }
    }

    for (let i = firstBrokenIdx - jumpSize; i < firstBrokenIdx; i++) {
        if (breaks[i]) {
            return i;
        }
    }
    return -1;
}
