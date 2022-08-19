//Newest solution

function accum(s) {
    return s.split('').map((letter, i) => letter.toUpperCase() + letter.toLowerCase().repeat(i)).join('-');
}

//Almost solution

// function accum(s) {
//     return s.split('').map((letter, i) => s[i].toUpperCase() + s[i].toLowerCase().repeat(i)).join('-');
// }

//Newer solution

// function accum(s) {
//     let arr = [];
//     for (let i = 0; i < s.length; i++) {
//         str = s[i].toUpperCase();
//         str += s[i].toLowerCase().repeat(i);
//         arr.push(str);
//     }
//     return arr.join('-');
// }

//Old attempt

// function accum(s) {
//     let str = '';
//     for (i = 0; i < s.length; i++) {
//         if (i > 0) {
//             str += '-';
//         }
//         const currentLetter = s[i].toUpperCase;
//         str += currentLetter;
//         for (j = 0; j < i; j++) {
//             str += currentLetter.toLowerCase;
//         }
//     }
//     return str;
// }