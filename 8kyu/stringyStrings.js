function stringy(size) {
    let str = '';
    for (i = 0; i < size; i++) {
        str += Number(i % 2 === 0)
    }
    return str;
}