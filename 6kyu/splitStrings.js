//Original solution without RegEx

function solution(str) {
    const arr = []
    for (i = 0; i < str.length; i += 2) {
        const pair = str[i + 1] ? str[i] + str[i + 1] : str[i] + '_';
        arr.push(pair);
    }
    return arr;
}

//Alternative more readable solution without RegEx

function solution(str) {
    const arr = []
    if (str.length % 2 !== 0) {
        str += '_'
    }
    for (i = 0; i < str.length; i += 2) {
        arr.push(str[i] + str[i + 1]);
    }
    return arr;
}

//Solution with RegEx

function solution(str) {
    return (str + '_').match(/.{2}/g) || [];
}