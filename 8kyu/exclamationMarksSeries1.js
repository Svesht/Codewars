//Original solution

function remove (string) {
    const lastIndex = string.length - 1;
    if (string[lastIndex] === '!') return string.slice(0, lastIndex);
    return string;
}

//Shorter using RegEx

const remove = string => string.replace(/!$/, '');