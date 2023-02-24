//First solution

function combat(health, damage) {
    health -= damage;
    return health > 0 ? health : 0;
}

//Cleaner arrow function with Math.max
const combat = (health, damage) => Math.max(health - damage, 0)