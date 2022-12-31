//Original solution

function sumDigits(number) {
    let sum = 0;
    const str = String(Math.abs(number));
    for (const digit of str) {
        sum += Number(digit);
    }
    return sum;
}

//Alternative in two lines

function sumDigits(number) {
    const str = Math.abs(number).toString();
    return str.split('').reduce((sum, cur) => sum + cur, 0);
}

//One-liner but spaced out

const sumDigits = num => Math.abs(num)
        .toString()
        .split('')
        .reduce((sum, cur) => sum + Number(cur), 0);