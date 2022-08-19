//Very fast recursive function

function persistence(num) {
    num = num.toString();
    return num.length > 1 ? 1 + persistence(num.split('').reduce((a, b) => a * b)) : 0;
}

//while loop solution

function persistence(num) {
    let i = 0;
    num = num.toString();
    while (num.length > 1) {
        i++;
        num = num.split('').map(Number).reduce((a, b) => a * b).toString()
    }
    return i;
}

//original solution, used a recursive function

function persistence(num, i = 0) {
    console.log(num);
    const numOfDigits = num.toString().length;
    console.log(numOfDigits);
    if (numOfDigits === 1) {
        return i;
    }
    const product = num.toString().split('').reduce((a, n) => a * n);
    console.log(product);
    return persistence(product, i + 1);
}