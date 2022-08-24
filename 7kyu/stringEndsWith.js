//I will remember the endsWith and startsWith methods

function solution(str, ending) {
    return str.endsWith(ending);
}

//Original solution. If the length of the ending is 0, return true because every string ends with "".

function solution(str, ending) {
    return ending.length > 0 ? str.slice(-ending.length) === ending : true;
}