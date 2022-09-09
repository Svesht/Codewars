//Original solution

function anagrams(word, words) {
    return words.filter(s => {
        const letters = s.split('');
        for (i = 0; i < word.length; i++) {
            const letter = word[i];
            const index = letters.indexOf(letter);
            if (index === -1) return false;
            letters.splice(index, 1);
        }
        return !letters.length;
    })
}

//Better solution using comparison instead of loop

function anagrams(word, words) {
    word = word.split('').sort().join('');
    return words.filter(s => s.split('').sort().join('') === word)
}