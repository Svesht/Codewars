function scramble(str1, str2) {
    const cache = {};

    for (let i = 0; i < str1.length; i++) {
        cache[str1[i]] ? cache[str1[i]]++ : cache[str1[i]] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        if (!cache[str2[i]]) {
            return false;
        }
        cache[str2[i]]--;
    };

    return true;
}