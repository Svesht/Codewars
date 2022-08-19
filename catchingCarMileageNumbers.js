function isInteresting(num, awesomePhrases) {
    console.log('attempt')
    if (checkInterest(num, awesomePhrases)) {
        return 2;
    } else if (checkInterest(num + 1, awesomePhrases) || (checkInterest(num + 2, awesomePhrases))) {
        return 1;
    } else {
        return 0;
    }
}

function checkInterest(num, awesomePhrases) {
    if (!over99(num)) {
        return false;
    }
    if (awesomePhrases.includes(num) || wholeNum(num) || monotone(num) || sequentialIncrementing(num) || sequentialDecrementing(num) || palindrome(num)) {
        return true;
    }
}

function over99(num) {
    console.log('over99');
    return num > 99;
}

function wholeNum(num) {
    console.log('wholeNum');
    let whole = true;
    let numString = num.toString();
    for (let i = 1; i < numString.length; i++) {
        if (numString[i] != 0) {
            whole = false;
        }
    }
    return whole;
}

function monotone(num) {
    let monotone = true;
    let numString = num.toString();
    for (let i = 1; i < numString.length; i++) {
        if (numString[i] !== numString[i - 1]) {
            monotone = false;
        }
    }
    return monotone;
}

/**
 * 
 * @param {number} num 
 * @returns 
 */
function sequentialIncrementing(num) {
    console.log('seq');
    let incrementing = true;
    const numString = num.toString();
    for (let i = 1; i < numString.length; i++) {
        if (previousNum(numString[i]) !== numString[i - 1]) {
            incrementing = false;
        }
    }
    console.log('incrementing: ', incrementing);
    return incrementing;
}

/**
 * 
 * @param {number} num 
 * @returns 
 */
function previousNum(num) {
    num = Number(num);
    if (num > 0) {
        return (num - 1).toString();
    } else {
        return '9';
    }
}

function sequentialDecrementing(num) {
    console.log('dec');
    let decrementing = true;
    num = num.toString();
    console.log(num);
    for (let i = 1; i < num.length; i++) {
        if (nextNum(num[i]) !== num[i - 1]) {
            decrementing = false;
        }
    }
    console.log('return decrementing;: ', decrementing);
    return decrementing;
}

function nextNum(num) {
    num = Number(num);
    if (num < 9) {
        return (num + 1).toString();
    } else {
        return '0';
    }
}

function palindrome(num) {
    console.log('palindrome');
    let palindrome = true;
    num = num.toString();
    for (let i = 0; i < num.length; i++) {
        if (num[i] !== num[num.length - 1 - i]) {
            palindrome = false;
        }
    }
    return palindrome;
}