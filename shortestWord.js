function findShort(s) {
    return Math.min(...s.split(' ').map(word => word.length));
}

// original solution

function findShort(str) {
    str = str.split(' ').sort((a, b) => a.length - b.length);
    return str[0].length;
}