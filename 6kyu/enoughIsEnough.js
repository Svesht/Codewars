//Original solution

function deleteNth(arr, n) {
    const cache = {};
    const filteredArr = [];
    for (const d of arr) {
        if (!cache[d]) {
            cache[d] = 1;
            filteredArr.push(d);
        } else if (cache[d] < n) {
            cache[d]++;
            filteredArr.push(d);
        }
    }
    return filteredArr;
}

//Refactored

function deleteNth(arr, n) {
    const cache = {};
    return arr.filter(num => {
        cache[num] = (cache[num] || 0) + 1;
        return cache[num] <= n;
    })
}