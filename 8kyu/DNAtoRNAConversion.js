function DNAtoRNA(dna) {
    return dna.split('T').join('U');
}

//Original solution

function DNAtoRNA(dna) {
    const dnaArr = dna.split('');
    const rnaArr = dnaArr.map((x) => {
        if (x === 'T') {
            return 'U';
        }
        return x
    });
    return rnaArr.join('');
}