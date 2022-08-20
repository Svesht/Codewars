function getCount(str) {
    let vowelsCount = 0;
    str.split('').forEach(n => {
        if (n === 'a' || n === 'e' || n === 'i' || n === 'o' || n === 'u') {
            vowelsCount++;
        }
    })
    return vowelsCount;
}