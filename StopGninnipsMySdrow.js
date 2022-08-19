function spinWords(string) {
    return string.split(' ').map(n => {
        return n.length > 4 ? n.split('').reverse().join('') : n;
    }).join(' ');
}