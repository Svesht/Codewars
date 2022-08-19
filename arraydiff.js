function arrayDiff(a, b) {
    b.forEach(n => {
        a = a.filter((m) => m !== n)
    })
    return a;
}