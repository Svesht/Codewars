function sumOfDifferences(arr) {
    let sum = 0
    const descArr = arr.sort((a, z) => z - a);
    for (let i = 1; i < arr.length; i++) {
        sum += descArr[i - 1] - descArr[i];
    }
    return sum;
}



/**
 * 
 * @param {number[]} arr 
 */
function sumOfDifferences2(arr) {
    let result = 0;
    if (arr.length <= 1) {
        return result;
    }

    const sortedArr = arr.sort((a, z) => z - a);
    for (let i = 1; i < sortedArr.length; i++) {
        result += (sortedArr[i - 1] - sortedArr[i]);
    }
    return result;
}