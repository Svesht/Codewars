//Shortest version using spread operator. I learned that set can take in strings, not just arrays.

function longest(s1, s2) {
    return [...new Set(s1 + s2)].sort().join('');
}

//original solution

function longest(s1, s2) {
    let result = (s1 + s2).split(''); //combine and turn to array
    result = new Set(result);          //turn to set to remove duplicates
    return Array                         // turn back to array, sort and return string
        .from(result)
        .sort()
        .join('');
}