function highAndLow(numbers) {
    const numArr = numbers.split(' ').sort((b, a) => a - b);
    return `${numArr[0]} ${numArr[numArr.length - 1]}`;
}

function highAndLow(numbers) {
    numbers = numbers.split(' ');
    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}