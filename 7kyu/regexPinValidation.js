function validatePIN(pin) {
    if (pin.match(/(^\d{4}$)|(^\d{6}$)/)) {
        return true
    } else {
        return false
    }
}