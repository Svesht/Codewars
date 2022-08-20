function digitize(n) {
    const arr = n.toString().split('').reverse();
    return arr.map(x => Number(x));
}
