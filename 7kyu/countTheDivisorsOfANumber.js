//Original solution

function getDivisorsCnt(n){
    let divisors = 1;
    for (i = 1; i <= n / 2; i++) {
        if (n % i === 0) divisors++;
    }
    return divisors;
}