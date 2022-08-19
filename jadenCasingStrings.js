String.prototype.toJadenCase = function () {
    return this.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// String.prototype.toJadenCase = function () {
//     return this.split(' ').map(el => {
//         return el.split('').map((letter, i) => {
//             return i ? letter : letter.toUpperCase();
//         }).join('');
//     }).join(' ');
// }