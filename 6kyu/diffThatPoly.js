//Updated with n = poly.length -1 to make it more readable;

function diff(poly) {
    const result = [];
    const n = poly.length - 1;
    for (i = 0; i < n; i++) {
        result.push(poly[i] * (n - i))
    }
    return result;
}

//old

function diff(poly) {
    const result = [];
    const n = poly.length - 1;
    for (i = 0; i < poly.length - 1; i++) {
        result.push(poly[i] * (poly.length - 1 - i))
    }
    return result;
}