//Original solution

function isPrime(num) {
    if (num < 2) {
        return false
    }
    if (num === 2) {
        return true;
    }
    for (i = 2; i <= Math.sqrt(num); i++) {
        if ((num / i) % 1 === 0) {
            return false
        }
    }
    return true;
}

//Refactored to exclude the exception for the number two

function isPrime(num) {
    if (num < 2) return false;
    for (i = 2; i <= Math.sqrt(num); i++) {
        if ((num / i) % 1 === 0) return false;
    }
    return true;
}

//Improved performance by calculating the square root before the loop

function isPrime(num) {
    if (num < 2) return false;
    const squareRoot = Math.sqrt(num);
    for (i = 2; i <= squareRoot; i++) {
        if ((num / i) % 1 === 0) return false;
    }
    return true;
}