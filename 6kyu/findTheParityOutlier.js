function findOutlier(integers) {
    const evens = integers.filter(n => n % 2 === 0);
    const odds = integers.filter(n => n % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
}

//Original solution

function findOutlier(integers) {
    const evens = [];
    const unevens = [];
    for (let num of integers) {
        num % 2 === 0 ? evens.push(num) : unevens.push(num);
    }
    return evens.length === 1 ? evens[0] : unevens[0];
}