//Original solution

function calculateYears(principal, interest, tax, desired) {
    let year = 0;
    while (principal < desired) {
        principal += principal * interest * (1 - tax);
        year++;
    }
    return year;
}

//Math version
// Basic formula for interest is N = b * g^t
// the growth factor g = 1 + interest * (1 - tax);
// Applied here it becomes: principal * g^t = desired
// t = gLog(desired / principal)

// t = log(desired / principal) / log(g)
//It needs to be rounded up to get the right year

//Result:

function calculateYears(principal, interest, tax, desired) {
    const yearlyFactor = 1 + interest * (1 - tax);
    const necessaryFactor = desired / principal;
    return Math.ceil(Math.log(necessaryFactor) / Math.log(yearlyFactor));
}