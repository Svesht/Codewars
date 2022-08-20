function squareSum(numbers) {
    return numbers.reduce((sum, num) => sum + num ** 2, 0);
}

//original solution

function squareSum(numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num ** 2;
    }
    return sum;
}