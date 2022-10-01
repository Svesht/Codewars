//Refactored

function generateHashtag (str) {
    str = '#' + str.trim().split(' ').map(word => capitalize(word)).join('');
    return str.length > 1 && str.length < 141 ? str : false;
}

const capitalize = str => str ? str[0].toUpperCase() + str.slice(1) : str;

//Original solution

function generateHashtag (str) {
    let arr = str.split(' ');
    arr = arr.map(word => word
        .split('')
        .map((letter, i) => i === 0 ? letter.toUpperCase() : letter)
        .join(''));
    str = '#' + arr.join('');
    return (str.length > 1 && str.length < 141) ? str : false;
}

//Alernate solution

function generateHashtag (str) {
    str = '#' + str
        .split(' ')
        .map(word => word
            .split('')
            .map((letter, i) => i === 0 ? letter.toUpperCase() : letter)
            .join(''))
        .join('');
    return (str.length > 1 && str.length < 141) ? str : false;
}