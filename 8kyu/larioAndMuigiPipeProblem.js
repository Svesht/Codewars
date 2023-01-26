//First solution using loop

function pipeFix(arr) {
    const newArr = [];
    for (i = arr[0]; i <= arr[arr.length - 1]; i++) {
        newArr.push(i);
    }
    return newArr;
}

//Refactored to make it more readable

function pipeFix(arr) {
    const first = arr[0];
    const last = arr[arr.length - 1];

    const newArr = [];
    for (i = first; i <= last ; i++) {
        newArr.push(i);
    }
    return newArr;
}


//Alternative version using map

const pipeFix = (arr) => Array.from({ length: arr.pop() - arr[0] + 1}, (num, i) => arr[0] + i);