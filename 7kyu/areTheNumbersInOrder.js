function inAscOrder(arr) {
    for (i = 1; i <= arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true
}