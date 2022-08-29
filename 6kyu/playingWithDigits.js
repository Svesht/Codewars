//Original solution

function digPow(n, p) {
    const arr = n.toString().split('');
    const sum = arr.reduce((sum, digit, index) => sum + Math.pow(digit, p + index), 0);
    return sum % n === 0 ? sum / n : -1;
}

//Alt taking advantage of the falsy result when there is no remainder

function digPow(n, p) {
    const arr = n.toString().split('');
    const sum = arr.reduce((sum, digit, index) => sum + Math.pow(digit, p + index), 0);
    return sum % n ? -1 : sum / n;
}