function expandedForm(num) {
    let expanded = '';
    const arr = num.toString().split('');
    arr.forEach((n, i) => {
        if (n !== '0') {
            if (i !== 0) {
                expanded += ' + '
            }
            expanded += n
            for (j = 0; j < arr.length - 1 - i; j++) {
                expanded += 0;
            }
        }
    })
    return expanded;
}

/**
 * 
 * @param {number} num 
 */
function expandedForm3(num) {
    const numStr = num.toString();
    let result = '';
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] !== '0') {
            if (i !== 0) {
                result += ' + ';
            }
            result += numStr[i] + '0'.repeat(numStr.length - 1 - i);
        }
    }
    return result;
}