//Using a normal for loop

var uniqueInOrder = function (iterable) {
    const result = [];
    let last;

    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] !== last) {
            result.push(last = iterable[i]);
        }
    }
    return result;
}

//Avoiding the toString step

var uniqueInOrder = function (iterable) {
    return [...iterable].filter((n, i, arr) => n !== arr[i - 1]);
}

//Original solution

var uniqueInOrder = function (iterable) {
    if (typeof iterable === 'string') {
        iterable = iterable.split('');
    }
    return iterable.filter((n, i, arr) => n !== arr[i - 1]);
}