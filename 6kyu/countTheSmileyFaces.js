//Original solution, but messy because of nesting

function countSmileys(arr) {
    let smileys = 0;
    for (let element of arr) {
        console.log(element);
        for (i = 0; i < element.length; i++) {
            if (element[i] === ':' || element[i] === ';') {
                if (element[i + 1] === ')' || element[i + 1] === 'D') {
                    smileys++;
                } else if (element[i + 1] === '-' || element[i + 1] === '~') {
                    if (element[i + 2] === ')' || element[i + 2] === 'D') {
                        smileys++;
                    }
                }
            }
        }
    }
    return smileys;
}

//Slightly refactored

function countSmileys(arr) {
    let smileys = 0;
    for (let element of arr) {
        for (i = 0; i < element.length; i++) {
            if (element[i] === ':' || element[i] === ';') {
                if (element[i + 1] === ')' || element[i + 1] === 'D') {
                    smileys++;
                } else if ((element[i + 1] === '-' || element[i + 1] === '~') && (element[i + 2] === ')' || element[i + 2] === 'D')) {
                    smileys++;
                }
            }
        }
    }
    return smileys;
}

//Regex one-liner

const countSmileys = arr => arr.filter(x => /[:;][-~]?[)D]/.test(x)).length;