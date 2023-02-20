function solve(s) {
    let countLower = 0;
    let countUpper = 0;
    s.split('').forEach(letter => letter.toLowerCase() === letter ? countLower++ : countUpper++);
    return (countLower >= countUpper) ? s.toLowerCase() : s.toUpperCase();
}