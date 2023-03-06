function predictAge(age1,age2,age3,age4,age5,age6,age7,age8) {
    let ages = [age1, age2, age3, age4, age5, age6, age7, age8];
    ages = ages.map(age => age * age).reduce((sum, age) => sum + age, 0);
    return Math.floor(Math.sqrt(ages) / 2);
}