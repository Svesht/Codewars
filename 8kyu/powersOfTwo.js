//Original solution

function powersOfTwo(n){
    let arr = [];
    for (i = 0; i <= n; i++) {
        arr.push(Math.pow(2, i));
    }
    return arr;
}