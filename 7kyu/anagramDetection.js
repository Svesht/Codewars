//Original solution with loops and arrays

// var isAnagram = function(test, original) {
//     const testArr = test.toLowerCase().split('');
//     const str = original.toLowerCase();
//     for (const letter of str) {
//         const index = testArr.indexOf(letter);
//         if (index !== -1) {
//             testArr.splice(index, 1)
//         } else {
//             return false;
//         }
//     }
//     return testArr.length === 0;
// };

//New solution using sorting

const isAnagram = (test, original) => sorted(test) === sorted(original);

const sorted = s => s.toLowerCase().split('').sort().join('');
