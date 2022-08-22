//Also regex but using the charAt to get the letter

function toCamelCase(str) {
    return str.replace(/[-_]\w/g, match => match.charAt(1).toUpperCase());
}

//using regex and taking the second match

function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//First solution, a bit messy

function toCamelCase(str) {
    return str.split('').map((n, i) => {
        if (n === '_' || n === '-') {
            return '';
        }
        if (str[i - 1] === '_' || str[i - 1] === '-') {
            return n.toUpperCase();
        }
        return n;
    }).join('');
}