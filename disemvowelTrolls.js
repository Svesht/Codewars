// function disemvowel(str) {
//     let strArr = str.split('');
//     let newStr = '';
//     strArr.forEach(n => {
//         if (n.toLowerCase() !== 'a' && n.toLowerCase() !== 'e' && n.toLowerCase() !== 'i' && n.toLowerCase() !== 'o' && n.toLowerCase() !== 'u') {
//             newStr += n;
//         }
//     })
//     return newStr;
// }

//Second Pass

function disemvowel(str) {
    const vowels = { 'a': true, 'e': true, 'i': true, 'o': true, 'u': true };
    str = str.split('').filter(n => !vowels[n.toLowerCase()]).join('');
    return str;
}