//Original comprehensive version using if statements

function validParentheses(parens) {
    let counter = 0;
    for (i = 0; i < parens.length; i++) {
        if (parens[i] === '(') counter++;
        if (parens[i] === ')') counter--;
        if (counter < 0) return false;
    }
    return counter === 0;
}

//Original solution using ternary

function validParentheses(parens) {
    let counter = 0;
    for (i = 0; i < parens.length; i++) {
        parens[i] === '(' ? counter++ : counter--;
        if (counter < 0) return false;
    }
    return counter === 0;
}

