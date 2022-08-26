//Updated with destructuring

function openOrSenior(data) {
    return data.map(([age, handicap]) => age > 54 && handicap > 7 ? "Senior" : "Open");
}

//Original solution

function openOrSenior(data) {
    return data.map(person => person[0] > 54 && person[1] > 7 ? "Senior" : "Open");
}