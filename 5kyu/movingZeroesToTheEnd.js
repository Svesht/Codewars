//Using concatenation

function moveZeros(arr) {
    return arr.filter(n => n !== 0).concat(arr.filter(n => n === 0));
}

//Original solution

function moveZeros(arr) {
    let numOfZeroes = arr.filter(n => n === 0).length;
    arr = arr.filter(n => n !== 0);
    for (i = 0; i < numOfZeroes; i++) {
        arr.push(0);
    }
    return arr;
}