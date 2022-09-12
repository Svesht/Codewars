//Original solution

function towerBuilder(nFloors) {
    let arr = [];
    for (i = 0; i < nFloors; i++) {
        const spacesPerSide = nFloors - i - 1;
        arr.push(' '.repeat(spacesPerSide) + '*'.repeat(1 + i * 2) + ' '.repeat(spacesPerSide));
    }
    return arr;
}