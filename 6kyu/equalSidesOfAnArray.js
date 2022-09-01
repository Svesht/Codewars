function findEvenIndex(arr) {
    const sum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;
    for (i = 0; i < arr.length; i++) {
        if (leftSum === sum) {
            return i;
        }
        leftSum += arr[i];
    }
}