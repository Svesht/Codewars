function sumOfMinimums(arr) {
    return arr.reduce((sum, subArr) => sum += Math.min(...subArr), 0);
}