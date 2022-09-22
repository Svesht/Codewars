function countBy(x, n) {
    let multiples = [];
    for (i = 1; i <= n; i++) multiples.push(x * i);
    return multiples;
}

//Parameters
//x = positive number greater than 0
//n = the amount of multiples of x we need. It is a positive number greater than 0

//Return
//An array of the first n multiples of x

//Example
//if n = 4 and x = 5, we expect:
//[5, 10, 15, 20]

//Pseudocode
//Calculate each multiple of x and push it to the array. A loop is the best candidate.
//Return the array.