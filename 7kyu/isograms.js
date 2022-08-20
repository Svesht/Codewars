function isIsogram(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) !== i) {
            return false
        }
    }
    return true;
}

//Alternative clever solution:

function isIsogram(str) {
    return str.length === new Set(str.toLowerCase()).size;
}