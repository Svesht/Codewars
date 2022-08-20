//Math heavy solution

function getSum(a, b) {
    return (Math.abs(a - b) + 1) * (a + b) / 2;
}

//Second solution

function getSum(a, b) {
    const max = Math.max(a, b);
    const min = Math.min(a, b);
    return (max - min + 1) * (max + min) / 2;
}

//original solution

function getSum(a, b) {
    let sum = 0;
    const first = Math.min(a, b);
    const last = Math.max(a, b);
    for (i = first; i <= last; i++) {
        sum += i;
    }
    return sum;
}

