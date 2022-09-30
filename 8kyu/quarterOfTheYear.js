//Original solution

const quarterOf = (month) => {
    if (month <= 3) return 1;
    if (month <= 6) return 2;
    if (month <= 9) return 3;
    return 4;
}

//Clever Math.ceil solution

// const quarterOf = (month) => {
//     return Math.ceil(month / 3);
// }