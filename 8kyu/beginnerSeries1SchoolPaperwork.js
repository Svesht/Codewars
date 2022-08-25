//Shorter version

function paperwork(n, m) {
    return n > 0 && m > 0 ? n * m : 0;
}

//Original solution, together with yellowsub 

function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    return n * m;
}
