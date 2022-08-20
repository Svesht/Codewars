//Ones and zeroes

/**
 * 
 * @param {number[]} arr 
 * @returns 
 */

const binaryArrayToNumber = arr => {
    let tally = 0;
    arr.reverse().forEach((n, i) => (tally += n * 2 ** i));
    return tally;
};

//Ones and zeroes

/**
 * 
 * @param {number[]} arr 
 * @returns 
 */

const binaryArrayToNumber2 = arr => arr.reduceRight((acc, cur, i) => acc + cur * (arr.length - 1));

//Cool binary shift method

function binaryArrayToNumber(arr) {
    return arr.reduce((a, b) => a << 1 | b);
}