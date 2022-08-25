//Darn mathematicians

function rowSumOddNumbers(n) {
    return Math.pow(n, 3);
}

//Original solution

function rowSumOddNumbers(n) {
    return n > 1 ? sumPyramid(n) - sumPyramid(n - 1) : 1;
}

function sumPyramid(n) {
    let currentNum = 1;
    let sum = 1;
    for (row = 2; row <= n; row++) {
        for (i = 0; i < row; i++) {
            currentNum += 2;
            sum += currentNum;
        }
    }
    return sum;
}

/*
             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29

*/

//first attempt, almost had it
function rowSumOddNumbers(n) {
    //find the first number
    let firstNum = 1 + (n - 1) * 2;
    let sum = 0;
    //add the other numbers in the same row together
    for (i = 0; i < n; i++) {
        sum += firstNum + i * 2
    }
    return sum;
}