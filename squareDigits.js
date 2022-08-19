function squareDigits(num) {
    return Number(num.toString().split('').map(n => (n ** 2)).join(''));
}

function validatePIN(pin) {
    if (typeof pin === 'string' && pin.length === 4) {
        return true
    } else {
        return false
    }
}