//Original solution

function rgb(r, g, b) {
    return [r, g, b].map(n => {
        if (n > 255) n = 255;
        if (n < 0) n = 0;
        const hex = n.toString(16);
        return hex.length > 1 ? hex : 0 + hex;
    }).join('').toUpperCase();
}

//Alternative solution using reduce and spread

function rgb(r, g, b) {
    return [...arguments].reduce((res, cur) => {
        if (cur > 255) cur = 255;
        if (cur < 0) cur = 0;
        const hex = cur.toString(16).toUpperCase();
        return res + (hex.length > 1 ? hex : 0 + hex);
    }, '')
}