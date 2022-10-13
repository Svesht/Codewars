//Original solution

function monkeyCount(n) {
    const arr = [];
    for (i = 1; i <= n; i++) arr.push(i);
    return arr;
}

//Alternative using Array.from on an object

const monkeyCount = n => Array.from({length: n}, (_, i) => i + 1);