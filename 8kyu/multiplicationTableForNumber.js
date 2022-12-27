function multiTable(num) {
    str = '';
    for (i = 1; i <= 10; i++) {
        str += `${i} * ${num} = ${i * num}\n`;
    }
    return str.trim();
}