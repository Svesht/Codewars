const binaryArrayToNumber = arr => {
    let tally = 0;
    arr.reverse().forEach((n, i) => (tally += n * 2 ** i));
    return tally;
};