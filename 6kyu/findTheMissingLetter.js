//Original solution

function findMissingLetter(array) {
    for (i = 0; i < array.length - 1; i++) {
        if (array[i].charCodeAt() + 1 !== array[i + 1].charCodeAt()) return String.fromCharCode(array[i].charCodeAt() + 1);
    }
}

//Alternate solution, cleaner

function findMissingLetter(array) {
    const first = array[0].charCodeAt();
    for (i = 1; i < array.length; i++) {
        if (first + i !== array[i].charCodeAt()) {
            return String.fromCharCode(first + i)
        }
    }
}