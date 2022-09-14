//Original solution

function findNb(m) {
    let volume = 0;
    for (i = 1; volume < m; i++) {
        volume += Math.pow(i, 3);
        if (volume === m) return i;
    }
    return -1;
}

//Optimized for speed

function findNb(m) {
    let volume = 0;
    let n = 0
    while (volume < m) volume += Math.pow(++n, 3);
    return volume === m ? n : -1;
}

//Alternative solution but less readable 

function findNb(m) {
    let n = 0;
    let volume = 0
    while (volume < m) volume += ++n ** 3;
    return volume === m ? n : -1;
}
