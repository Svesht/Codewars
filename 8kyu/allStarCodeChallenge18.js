function strCount(str, letter) {
    let count = 0;
    for (const x of str) {
        if (x === letter) count++;
    }
    return count;
}