//Original solution

const fakeBin = string => string.split('').map(n => Number(n) < 5 ? 0 : 1).join('');