const capitals = word => {
    const arr = [];
    for (i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase()) arr.push(i);
    }
    return arr;
};