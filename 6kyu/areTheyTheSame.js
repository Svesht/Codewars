//Original solution

function comp(array1, array2) {
    if (!array1 || !array2) return false;
    array1.sort((a, z) => a - z);
    array2.sort((a, z) => a - z);
    for (i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (Math.pow(array1[i], 2) !== array2[i]) return false;
    }
    return true;
}

//Alt with the .every method

function comp(array1, array2) {
    if (!array1 || !array2) return false;
    array1.sort((a, z) => a - z);
    array2.sort((a, z) => a - z);
    return array1.map(num => Math.pow(num, 2)).every((n, i) => n === array2[i]);
}

//Alt with string comparison

function comp(array1, array2) {
    if (!array1 || !array2) return false;
    array1.sort((a, z) => a - z);
    array2.sort((a, z) => a - z);
    return array1.map(n => Math.pow(n, 2)).join('') === array2.join('')
}