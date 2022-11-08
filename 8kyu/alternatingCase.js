//Original solution

String.prototype.toAlternatingCase = function () {
    return this
        .split('')
        .map(s => changeCase(s))
        .join('');
}

const changeCase = s => s === s.toUpperCase() ? s.toLowerCase() : s.toUpperCase();