//Original solution

function nbDig(n, d) {
    let count = 0;
    for (i = 0; i <= n; i++) {
        const k = i * i;
        for (const digit of k.toString()) {
            if (digit == d) count++;
        }
    }
    return count;
}