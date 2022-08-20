/**
 * 
 * @param {number[]} array 
 * @returns 
 */
function sortArray(array) {
    const unevens = [];
    const unevensIndex = [];
    array.forEach((n, i) => {
        if (n % 2 !== 0) {
            unevens.push(n);
            unevensIndex.push(i);
        }
    })
    unevens.sort((a, z) => a - z);
    for (i = 0; i < unevens.length; i++) {
        array[unevensIndex[i]] = unevens[i];
    }
    return array;
}

/**
 * 
 * @param {number[]} array 
 * @returns 
 */
function sortArray2(array) {
    const unevens = {};
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            unevens[`${arr[i]}`] = i;
        }
    }
    const sortedUnevens = Object.keys(unevens).sort((a, z) => a - z);

    for (const uneven of sortedUnevens) {
        array[unevens[uneven]] = uneven;
    }

    return array;
}
