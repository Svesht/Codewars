//Original solution

function enough(cap, on, wait) {
    const spaces = cap - on;
    if (wait > spaces) return wait - spaces;
    return 0;
}

//Alternative using Math.max

const enough = (cap, on, wait) => Math.max(on + wait - cap, 0);