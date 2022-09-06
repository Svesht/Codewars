//Original solution

function rgb(r, g, b) {
    return [r, g, b].map(n => {
        if (n > 255) n = 255;
        if (n < 0) n = 0;
        const hex = n.toString(16);
        return hex.length > 1 ? hex : 0 + hex;
    }).join('').toUpperCase();
}