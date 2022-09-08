//Original solution

function divisors(integer) {
    const arr = [];
    for (i = 2; i < integer; i++) {
        if ((integer / i) % 1 === 0) {
            arr.push(i);
        }
    }
    return arr[0] ? arr : `${integer} is prime`;
};

//Refactored to clean up the divisor check and ternary condition, and to make it more efficient by reducing loop length

function divisors(integer) {
    const arr = [];
    for (i = 2; i <= integer / 2; i++) {
        if (integer % i === 0) {
            arr.push(i);
        }
    }
    return arr.length ? arr : `${integer} is prime`;
};