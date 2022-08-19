var countBits = function (n) {
    return n.toString(2).split('0').join('').length;
};

// var countBits = function (n) {
//     return n.toString(2).split('').filter(n => Number(n)).length;
// };


// var countBits = function (n) {
//     let counter = 0;
//     for (let digit of n.toString(2)) {
//         if (digit == 1) {
//             counter++;
//         }
//     }
//     return counter;
// };

