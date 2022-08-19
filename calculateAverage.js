function find_average(array) {
    return array.length ? array.reduce((a, n) => a + n) / array.length : 0;
}