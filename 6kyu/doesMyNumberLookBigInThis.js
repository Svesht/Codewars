



//Original solution

function narcissistic(value) {
    const arr = value.toString().split('');
    return value === arr.reduce((sum, digit) => sum + Math.pow(digit, arr.length), 0);
}
