function factorial(n) {
    if (n < 0 || n > 12) throw RangeError();
    let factorial = 1;
    for (i = n; i > 0; i--) {
        factorial *= i;
    }
    return factorial;
}