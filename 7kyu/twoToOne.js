function longest(s1, s2) {
    let result = (s1 + s2).split(''); //combine and turn to array
    result = new Set(result);          //turn to set to remove duplicates
    return Array                         // turn back to array, sort and return string
        .from(result)
        .sort()
        .join('');
}