function gimme (triplet) {
    const sorted = [...triplet].sort((a, z) => a - z);
    return triplet.indexOf(sorted[1]);
}