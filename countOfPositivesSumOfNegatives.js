function countPositivesSumNegatives(input) {
    const result = [0, 0];
    input.forEach(n => {
        if (n > 0) {
            result[0]++;
        } else if (n < 0) {
            result[1] += n;
        }
    })
    return;
}