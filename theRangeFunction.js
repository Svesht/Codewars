function range(start, end, step) {

    const rng = [];
    let compensator = 0;

    if (start === undefined) {
        return rng;
    }
    if (end === undefined) {
        end = start;
        start = 0;
    }
    if (step === undefined) {
        step = 1;
    }
    if (end < start) {
        return rng;
    }

    if (step === 0) {
        step = 1;
        for (let i = start; i < end; i = i + step) {
            rng.push(start);
        }
        return rng;
    }

    for (let i = start; i < end; i = i + step) {
        rng.push(i);
    }

    return rng;
}