function invert(array) {
    let newArr = array;
    for (i = 0; i < newArr.length; i++) {
        newArr[i] = -newArr[i];
    }
    return newArr;
}