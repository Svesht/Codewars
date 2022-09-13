//Original solution

const reverseSeq = n => {
    let res = [];
    for (i = n; i > 0; i--) {
        res.push(i);
    }
    return res;
};

//Shorter but not good practice

const reverseSeq2 = n => {
    return [...Array(n)].map(_ => n--)
};

//Better practice 

const reverseSeq3 = n => {
    return [...Array(n)].map((_, i) => n - i)
};

//One line

const reverseSeq4 = n => [...Array(n)].map((_, i) => n - i);