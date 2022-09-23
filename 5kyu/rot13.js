//Original solution

const rot13old = message => message
    .split('')
    .map(e => encode(e))
    .join('');

function encode(e) {
     const charCode = e.charCodeAt()
        if (charCode >= 65 && charCode <= 90) {
            return charCode + 13 <= 90 ? String.fromCharCode(charCode + 13) : String.fromCharCode(charCode - 13);
        }
        if (charCode >= 97 && charCode <= 122) {
            return charCode + 13 <= 122 ? String.fromCharCode(charCode + 13) : String.fromCharCode(charCode - 13);
        }
        return e;
}

//Simplified using replace

const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt() + (letter.toLowerCase() <= 'm' ? 13 : -13)));
