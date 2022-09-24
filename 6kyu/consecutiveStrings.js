//Original solution, but messy due to nested for loops

function longestConsec(arr, k) {
    if (k < 1) return "";
    let longest = '';
    let current;
    for (i = 0; i <= arr.length - k; i++) {
        current = arr[i];
        for (n = 1; n < k; n++) {
            current += arr[i + n];
        }
        if (current.length > longest.length) longest = current;
    }
    return longest
}

//Refactored

function longestConsec(arr, k) {
    let longest = '';
    let current;
    for (i = 0; k > 0 && i <= arr.length - k; i++) {
        current = arr.slice(i, i + k).join('')
        if (current.length > longest.length) longest = current;
    }
    return longest;
}