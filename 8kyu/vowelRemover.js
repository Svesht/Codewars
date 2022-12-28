function shortcut (string) {
    const vowels = ['a','e','i','o','u'];
    const str = string.split('').filter(letter => !vowels.includes(letter));
    return str.join('');
}