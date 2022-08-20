function duplicateEncode(word) {
    return word.toLowerCase().split('').map((char, i, arr) => arr.indexOf(char) == arr.lastIndexOf(char) ? '(' : ')').join('');
}

function checkIfUnique(character, i, arr) {
    if (arr.indexOf(character) !== i || arr.lastIndexOf(character) !== i) {
        return ')'
    }
    return '(';
}

//Original solution

function duplicateEncode(word) {
    return word.toLowerCase().split('').map((character, i, arr) => checkIfUnique(character, i, arr)).join('');
}

function checkIfUnique(character, i, arr) {
    if (arr.indexOf(character) !== i || arr.lastIndexOf(character) !== i) {
        return ')'
    }
    return '(';
}