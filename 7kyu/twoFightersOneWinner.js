//First solution

function declareWinner(fighter1, fighter2, firstAttacker) {
    const turnsToWinFighter1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    const turnsToWinFighter2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    if (turnsToWinFighter2 > turnsToWinFighter1) return fighter1.name;
    if (turnsToWinFighter1 > turnsToWinFighter2) return fighter2.name;
    return (fighter1.name === firstAttacker) ? fighter1.name : fighter2.name;
}

//Cleanup at the end

function declareWinner(fighter1, fighter2, firstAttacker) {
    const turnsToWinFighter1 = Math.ceil(fighter2.health / fighter1.damagePerAttack);
    const turnsToWinFighter2 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
    if (turnsToWinFighter2 > turnsToWinFighter1) return fighter1.name;
    if (turnsToWinFighter1 > turnsToWinFighter2) return fighter2.name;
    return firstAttacker;
}