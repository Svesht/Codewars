function dataSplitter(data, i) {
    const copy = clone(data);
    const cut = copy.filter((_, index) => index !== 0);

    for (const row of cut) {
        row.splice(i, 1);
    }

    return cut;
}

function clone(items) {
    return items.map(item => Array.isArray(item) ? clone(item) : item);
};

function determinant(data) {
    if (data.length === 1) {
        return data[0][0];
    }

    if (data.length === 2 && data[0].length === 2) {
        return data[0][0] * data[1][1] - data[0][1] * data[1][0];
    }

    let factor;
    let cutMatrix;
    let subDeterminant;
    return data[0].reduce((discriminant, column, index) => {
        factor = column * Math.pow(-1, index);
        cutMatrix = dataSplitter(data, index);
        subDeterminant = determinant(cutMatrix);
        return discriminant + factor * subDeterminant;
    }, 0)
}