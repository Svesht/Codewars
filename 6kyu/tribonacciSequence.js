// function tribonacci(signature, n) {
//     if (n == 0) return [];
//     console.log(signature);
//     console.log(n);
//     const trib = [];
//     for (let i = 0; i < n; i++) {
//         trib[i] = signature[i];
//     }
//     for (let i = signature.length; i < n; i++) {
//         trib[i] = trib[i - 1] + trib[i - 2] + trib[i - 3];
//     }
//     return trib;
// }

//Second Pass

function tribonacci(signature, n) {
    const arr = [];
    for (i = 0; i < 3 && i < n; i++) {
        arr[i] = signature[i];
    }
    for (i = 3; i < n; i++) {
        arr[i] = arr[i - 3] + arr[i - 2] + arr[i - 1];
    }
    return arr;
}