function getSize(x, y, z) {
    const totalArea = 2 * (x * y) + 2 * (x * z) + 2 * (y * z);
    const volume = x * y * z;
    return [totalArea, volume];
}