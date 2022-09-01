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