//Original solution

// const bonusTime = (salary, bonus) => '£' + (bonus ? 10 * salary : salary);

//Alternative

const bonusTime = (salary, bonus) => '£' + salary * (bonus ? 10 : 1);