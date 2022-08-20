function repeatStr(n, s) {
    return s.repeat(n);
}

//original solution

function repeatStr(n, s) {
    let str = '';
    for (i = 0; i < n; i++) {
        str += s;
    }
    return str;
}