//Original solution with ternary

function lovefunc(flower1, flower2) {
    return flower1 % 2 === 0 ? flower2 % 2 !== 0 : flower2 % 2 === 0;
}

//Clever alternate

function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}