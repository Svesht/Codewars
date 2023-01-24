const flip= (d, a) => {
    if (d === 'R') return a.sort((a, z) => a - z);
    if (d === 'L') return a.sort((a, z) => z - a);
}