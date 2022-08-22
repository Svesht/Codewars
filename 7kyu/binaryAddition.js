//my preferred solution

function addBinary(a, b) {
    let sum = a + b;
    return sum.toString(2);
}

//the shorter one that I also came up with

function addBinary(a, b) {
    return (a + b).toString(2);
}