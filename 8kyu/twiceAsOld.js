//Original solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const years = 2 * sonYearsOld - dadYearsOld;
    return years > 0 ? years : -years;
}

//Better solution

const twiceAsOld = (dadAge, sonAge) => Math.abs(2 * sonAge - dadAge);