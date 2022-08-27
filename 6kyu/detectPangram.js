// New solution using the every method

function isPangram(string) {
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz"
        .split('')
        .every(letter => string.includes(letter));
}

//Original solution using UTF-16 codes

function isPangram(string) {
    const charCodes = string.toUpperCase().split('').map(n => n.charCodeAt());
    for (let code = 65; code < 91; code++) {
        if (!charCodes.includes(code)) {
            return false;
        }
    }
    return true;
}