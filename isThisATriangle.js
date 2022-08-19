function isTriangle(a, b, c) {
    const sorted = [a, b, c].sort((a, b) => a - b);
    return sorted[0] + sorted[1] > sorted[2] ? true : false;
}