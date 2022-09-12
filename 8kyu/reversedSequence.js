//Original solution

const reverseSeq = n => {
    let res = [];
    for (i = n; i > 0; i--) {
        res.push(i);
    }
    return res;
};