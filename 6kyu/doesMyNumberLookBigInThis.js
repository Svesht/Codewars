//Original solution, I liked this one better than the other solutions

function narcissistic(value) {
    const arr = value.toString().split('');
    return value === arr.reduce((sum, digit) => sum + Math.pow(digit, arr.length), 0);
}
