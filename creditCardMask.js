//Original solution

function maskify(cc) {
    return cc
        .split('')
        .map((n, i) => i >= cc.length - 4 ? n : '#')
        .join('');
};