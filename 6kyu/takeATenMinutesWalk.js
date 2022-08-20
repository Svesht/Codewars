//Original solution

function isValidWalk(walk) {
    const cache = {};
    for (const direction of walk) {
        cache[direction] ? cache[direction]++ : cache[direction] = 1;
    }
    if (walk.length === 10 && cache.n === cache.s && cache.w === cache.e) {
        return true
    }
    return false;
}