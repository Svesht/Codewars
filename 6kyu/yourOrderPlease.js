//Updated with more succinct notation for digits

function order(words) {
    return words
        .split(' ')
        .sort((a, z) => a.match(/\d/) - z.match(/\d/))
        .join(' ');
}

//Original solution. This one taught me to be very careful, I made some little errors in the sort function.

function order(words) {
    return words
        .split(' ')
        .sort((a, z) => a.match(/[1-9]/) - z.match(/[1-9]/))
        .join(' ');
}

//Practice without RegEx. It iterates (ascending) through all relevant numbers and pushes the word that includes that number to the resulting array.

function order(words) {
    const arr = words.split(' ')
    const sortedArr = [];
    for (i = 1; i <= arr.length; i++) {
        for (j = 0; j < arr.length; j++) {
            if (arr[j].includes(i)) {
                sortedArr.push(arr[j]);
            }
        }
    }
    return sortedArr.join(' ');
}