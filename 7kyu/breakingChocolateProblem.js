//Original solution

function breakChocolate(n,m) {
    if (n < 1 || m < 1) return 0;
    return (n - 1) + n * (m - 1);
}

//Alternative

const breakChocolate = (n, m) => n * m === 0 ? 0 : n * m - 1;