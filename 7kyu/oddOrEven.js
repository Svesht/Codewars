//Original solution

function oddOrEven(array) {
    const sum = array.reduce((sum, num) => sum + num, 0);
    return sum % 2 === 0 ? 'even' : 'odd';
}