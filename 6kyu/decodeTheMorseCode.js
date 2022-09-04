//Original solution

decodeMorse = function (morseCode) {
    return morseCode
        .split('   ')
        .map(word => word
            .split(' ')
            .map(x => MORSE_CODE[x])
            .join(''))
        .join(' ')
        .trim();
}

//Cool but difficult regex solution

const decodeMorse = morseCode =>
    morseCode
        .trim()
        .split(/  | /)
        .map(letter => MORSE_CODE[letter] || ' ')
        .join('');