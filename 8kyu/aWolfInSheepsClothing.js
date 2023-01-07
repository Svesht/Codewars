//Original solution

function warnTheSheep(queue) {
    const arr = [...queue];
    arr.reverse();
    for (i = 1; i < arr.length; i++) {
        if (arr[i] === 'wolf') {
            return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`;
        }
    }
    return "Pls go away and stop eating my sheep";
}

//Refactored to use indexOf instead of loop. Both seem fine to me.

function warnTheSheep(queue) {
    const arr = [...queue];
    const wolfPosition = arr.reverse().indexOf('wolf');
    return wolfPosition === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${wolfPosition}! You are about to be eaten by a wolf!`;
}