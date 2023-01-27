//Original solution using loop

function triangular(n) {
    if (n < 1) return 0;
    let sum = 0;
    for (i = 1; i <= n; i++) sum += i;
    return sum;
}

//Alternative solution using math

function triangular(n) {
    if (n < 1) return 0;
    return ((n * n) + n) / 2;
}