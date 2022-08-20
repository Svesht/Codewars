function nbYear(p0, percent, aug, p) {
    let year = 0;
    while (p0 < p) {
        year++;
        p0 = Math.floor(p0 + (percent / 100 * p0) + aug); //Math.floor over .round is dubious here, but otherwise fails a test
    }
    return year;
}
