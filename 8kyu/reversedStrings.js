function solution(str) {
    return str.split('').reverse().join('');
}

//original solution

function solution(str) {
    let newStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}