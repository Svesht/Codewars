//Original solution

function count (string) {  
    const cache = {};
    for (let letter of string) {
        cache[letter] ? cache[letter]++ : cache[letter] = 1;
    }
    return cache;
}