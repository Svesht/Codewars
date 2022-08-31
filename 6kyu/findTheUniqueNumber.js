//Original solution

function findUniq(arr) {
    const highestNum = arr.sort().pop();
    return arr.includes(highestNum) ? arr[0] : highestNum;
}

//Beautiful use of the find method and indexOf

function findUniq(arr) {
    return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
