//Original solution

// const twoOldestAges = ages => {
//     const arr = [...ages];
//     return arr
//         .sort((a,z) => z - a)
//         .slice(0, 2)
//         .reverse();
// }

//Shorter version without reverse

const twoOldestAges = ages => {
    const arr = [...ages];
    return arr
        .sort((a, z) => a - z)
        .slice(-2);
}
