//Original solution

function rentalCarCost(d) {
    const baseCost = 40 * d
    if (d > 6) return 40 * d - 50;
    if (d > 2) return 40 * d - 20;
    return 40 * d;
}

//Refactored

function rentalCarCost(d) {
    const baseCost = 40 * d
    if (d > 6) return baseCost - 50;
    if (d > 2) return baseCost - 20;
    return baseCost;
}

//Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.