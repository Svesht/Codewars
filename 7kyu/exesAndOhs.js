function XO(str) {
    const exes = str.split('').filter(n => n.toLowerCase() === 'x').length;
    const ohs = str.split('').filter(n => n.toLowerCase() === 'o').length;
    return exes === ohs;
}

// function XO(str) {
//     console.log(str);
//     let exes = 0;
//     let ohs = 0;
//     str.split('').forEach(n => {
//         if (n.toLowerCase() === 'x') {
//             exes++;
//         } else if (n.toLowerCase() === 'o') {
//             ohs++;
//         }
//     })
//     return exes === ohs;
// }