//Original solution

function shortcut (string) {
    const vowels = ['a','e','i','o','u'];
    const str = string.split('').filter(letter => !vowels.includes(letter));
    return str.join('');
}

//Solution with regex

const shortcut = string => string.replace(/[aeiou]/g, '');