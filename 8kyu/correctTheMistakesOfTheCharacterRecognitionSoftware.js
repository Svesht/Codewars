//Original solution

function correct(string) {
    const arr = string.split('').map(letter => {
        if (letter === '5') return 'S';
        if (letter === '0') return 'O';
        if (letter === '1') return 'I';
        return letter;
    })
    return arr.join('');
}