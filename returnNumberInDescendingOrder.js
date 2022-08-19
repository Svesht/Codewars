/**
 * 
 * @param {number} n 
 * @returns 
 */

function descendingOrder(n) {
    const arr = n.toString().split('');
    arr.sort((a, z) => z - a)
    return Number(arr.join(''));
}



