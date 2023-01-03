//Original solution

function solution(digits){
    let highest = 0;
    let current = 0;
    for (i = 0; i < digits.length - 4; i++) {
        current = Number(digits.slice(i, i + 5));
        if (current > highest) highest = current;
    }
    return highest;
}

//Cleaner solution using substr()

function solution(digits){
    let highest = 0;
    let current = 0;
    for (i = 0; i < digits.length - 4; i++) {
        current = Number(digits.substr(i, 5));
        if (current > highest) highest = current;
    }
    return highest;
}