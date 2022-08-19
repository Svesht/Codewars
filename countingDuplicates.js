//Regex

function duplicateCount(text) {
    return (text.toUpperCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
};

//Shorter version using letter indexes

function duplicateCount(text) {
    return text.toLowerCase().split('').filter((letter, i, arr) => {
        return arr.indexOf(letter) !== i && arr.lastIndexOf(letter) === i;
    }).length;
}

//Original solution

function duplicateCount(text) {
    const arr = text.toLowerCase().split('');
    let count = 0;
    const cache = {};
    for (const letter of arr) {
        cache[letter] ? cache[letter]++ : cache[letter] = 1;
    }
    for (const letter in cache) {
        if (cache[letter] > 1) {
            count++;
        }
    }
    return count;
}

//First attempt that checks how many multiples there are, not how many symbols occur multiple times

function duplicateCount(text) {
    const arr = text.toLowerCase().split('');
    const unique = new Set(arr);
    console.log(arr);
    console.log(unique);
    return arr.length - unique.size;
}