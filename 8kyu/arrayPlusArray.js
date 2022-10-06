//Original solution

const sumArray = arr => arr.reduce((sum, current) => sum + current, 0);
const arrayPlusArray = (arr1, arr2) => sumArray(arr1) + sumArray(arr2);

//Alt solution with concat

// const arrayPlusArray = (arr1, arr2) => arr1.concat(arr2).reduce((sum, num) => sum + num, 0);