//Original solution

function expressionMatter(a, b, c) {
    let arr = [];
    arr.push(a+b+c);
    arr.push(a*b+c);
    arr.push(a+b*c);
    arr.push((a+b)*c);
    arr.push(a*(b+c));
    arr.push(a*b*c);
    arr.sort((a,z) => z - a);
    return arr[0];
}