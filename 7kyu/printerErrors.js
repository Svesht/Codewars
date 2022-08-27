//Alternative without RegEx, interesting that the greater than operator works on letters too

function printerError(s) {
    let errors = 0;
    for (const letter of s) {
        if (letter > 'm') {
            errors++;
        }
    }
    return `${errors}/${s.length}`;
}

//Original solution using RegEx

function printerError(s) {
    const total = s.length;
    const errors = s.match(/[n-z]/g) ? s.match(/[n-z]/g).length : 0;
    return `${errors}/${total}`;
}