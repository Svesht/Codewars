function sumPairs(ints, s) {

    const cache = {};

    for (const int of ints) {
        // Check for complement
        if (cache[s - int]) {
            return [s - int, int];
        }
        // If cache does not contain the current number, add it to cache
        if (!cache[int]) {
            cache[int] = true
        };
    }
}