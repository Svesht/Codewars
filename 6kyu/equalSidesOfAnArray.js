//Original solution, a bit rough

function findEvenIndex(arr) {
    let leftSum;
    let rightSum;
    let index = -1;
    arr.forEach((number, i) => {
        leftSum = 0;
        rightSum = 0;
        for (l = 0; l < i; l++) {
            leftSum += arr[l];
        }
        for (r = i + 1; r < arr.length; r++) {
            rightSum += arr[r];
        }
        if (leftSum === rightSum) {
            index = i;
        }
    })
    return index;
}

//Refactored solution

function findEvenIndex(arr) {
    let left = 0;
    let right = arr.reduce((sum, n) => sum + n, 0);
    for (i = 0; i <= arr.length; i++) {
        if (i > 0) left += arr[i - 1];
        right -= arr[i];
        if (left === right) return i;
    }
    return -1;
}