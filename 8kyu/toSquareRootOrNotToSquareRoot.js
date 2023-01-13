//Original solution

const squareOrSquareRoot = arr => arr.map(num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num * num);