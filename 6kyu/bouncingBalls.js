//Original solution

function bouncingBall(h, bounce, window) {
    if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) return -1;
    let timesPassed = 1;
    let bounceHeight = h * bounce;

    while (bounceHeight > window) {
        timesPassed += 2;
        bounceHeight *= bounce;
    }

    return timesPassed;
}