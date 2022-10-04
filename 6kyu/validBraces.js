//Second attempt, succesful

function validBraces(braces){
    const matching = {')': '(', ']': '[', '}': '{'}
    const cache = [];
    for (const brace of braces) {
        if (brace === '(' || brace === '[' || brace === '{') {
            cache.push(brace);
        }
        else if (cache[cache.length - 1] === matching[brace]) {
            cache.pop();
        }
        else {
            return false;
        }
    }
    return cache.length === 0;
}

//First failed attempt

function validBraces(braces){
    console.log(braces);
    const cache = {parentheses: 0, brackets: 0, curlyBraces: 0}
    let valid = true;
    for (let i = 0; i < braces.length; i++) {
        switch(braces[i]) {
            case '(': cache.parentheses++; break;
            case ')': cache.parentheses ? cache.parentheses-- : valid = false; break;
            case '[': cache.brackets++; break;
            case ']': cache.brackets ? cache.brackets-- : valid = false; break;
            case '{': cache.curlyBraces++; break;
            case '}': cache.curlyBraces ? cache.curlyBraces-- : valid = false;
        }
    }
    return valid;
}