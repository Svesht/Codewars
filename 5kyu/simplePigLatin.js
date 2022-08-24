//Shorter and more readable solution

function pigIt(str) {
    return str.replace(/\w+/g, (word) => word.slice(1) + word[0] + 'ay');
}

//Original solution

function pigIt(str) {
    return str.replace(/\b(\w+)/g, encrypt);
}

function encrypt(word) {
    word = word.split('');
    const firstLetter = word.shift();
    const middle = word.join('');
    return middle + firstLetter + 'ay';
}

//failed attempt, turned out to be too complicated with the regex

function pigIt(str) {
    console.log(str.match(/\b(\w)\B(\w+)|\b(\w)/g))
    str.replace(/\b(\w)\B(\w+)|\b(\w)/g, (_, firstLetter = '', rest = '') => console.log(rest + ' - ' + firstLetter));

    return str.replace(/\b(\w)\B(\w+)|\b(\w)/g, (_, firstLetter = '', rest = '') => rest + firstLetter + 'ay');
}