//Original solution

// var humanYearsCatYearsDogYears = function(humanYears) {
//     let catYears = 15;
//     let dogYears = 15;
//     for (i = 1; i < humanYears; i++) {
//         if (i === 1) {
//             catYears += 9;
//             dogYears += 9;
//         } else {
//             catYears += 4;
//             dogYears += 5;
//         }
//     }
//   return [humanYears, catYears, dogYears];
// }

//Faster solution

const humanYearsCatYearsDogYears = function(years) {
    if (years === 1) return [1,15,15];
    if (years === 2) return [2,24,24];
    return [years, 24 + 4*(years - 2), 24 + 5*(years - 2)];
}