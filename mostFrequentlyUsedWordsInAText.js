/**
 * 
 * @param {string} text 
 */

function topThreeWords(text) {
    const wordArr = text.toLowerCase().split(/(?:\s+'?\s+)|[^'a-z]/g).filter((n) => n);
    const cache = {};
    for (let word of wordArr) {
        if (!cache[word]) {
            cache[word] = 0;
        }
        cache[word]++;
    }

    const sorted = Object.entries(cache).sort((a, b) => b[1] - a[1]);
    const top = [];
    for (let word of sorted) {
        top.push(word[0]);
    }
    return top.slice(0, 3)
}