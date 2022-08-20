//Regex version

function alphabetPosition(text) {
    const filtered = text.toUpperCase().match(/[A-Z]/g)
    return filtered ? filtered.map(c => c.charCodeAt() - 64).join(' ') : '';
}

// Original solution

function alphabetPosition(text) {
    return text.toLowerCase().split('').map(n => (parseInt(n, 36) - 9)).filter(n => n >= 1 && n <= 26).join(' ');
}

//Longer but easy version:

function alphabetPosition(text) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    return text.toLowerCase().split('').filter(n => alphabet.includes(n)).map(n => alphabet.indexOf(n) + 1).join(' ');
}