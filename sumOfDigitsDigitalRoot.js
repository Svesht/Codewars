function digital_root(n) {
    let dr = n.toString();
    while (dr.toString().length > 1) {
        dr = dr.toString().split('').reduce((a, n) => Number(a) + Number(n));
        console.log(dr);
    }
    return Number(dr);
}

function digital_root(n) {
    return n.toString().length === 1 ? n : digital_root(n.toString().split('').reduce((a, x) => Number(a) + Number(x)));
}