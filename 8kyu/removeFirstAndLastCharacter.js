function removeChar(str) {
    return str.slice(1, -1);
};

function removeChar(str) {
    let newStr = '';
    for (i = 1; i < str.length - 1; i++) {
        newStr += str[i];
    }
    return newStr;
};