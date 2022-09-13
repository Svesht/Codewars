//Original solution

function towerBuilder(nFloors) {
    let arr = [];
    for (i = 0; i < nFloors; i++) {
        const spacesPerSide = nFloors - i - 1;
        arr.push(' '.repeat(spacesPerSide) + '*'.repeat(1 + i * 2) + ' '.repeat(spacesPerSide));
    }
    return arr;
}

//Alternate faster solution

function towerBuilder(nFloors) {
    let arr = [];
    const spaces = " ".repeat(nFloors - 1);
    let star = '*';
    for (i = 0; i < nFloors; i++) {
        const space = spaces.substring(0, nFloors - i - 1);
        arr.push(space + '*'.repeat(1 + i * 2) + space);
        star += '**'
    }
    return arr;
}