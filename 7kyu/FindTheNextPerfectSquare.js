//Original solution

function findNextSquare(sq) {
    const root = Math.sqrt(sq);
    return root % 1 === 0 ? Math.pow(root + 1, 2) : -1;
}

//You could combine these two lines by skipping the variable, but I prefer the readability of this solution