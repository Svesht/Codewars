//Original solution

const rps = (p1, p2) => {
    if (p1 === 'rock' && p2 === 'scissors') return "Player 1 won!";
    if (p1 === 'scissors' && p2 === 'paper') return "Player 1 won!";
    if (p1 === 'paper' && p2 === 'rock') return "Player 1 won!";
    if (p1 === 'scissors' && p2 === 'rock') return "Player 2 won!";
    if (p1 === 'paper' && p2 === 'scissors') return "Player 2 won!";
    if (p1 === 'rock' && p2 === 'paper') return "Player 2 won!";
    return "Draw!";
};

//New solution

function rps (p1, p2) {
    const foil = {rock: 'paper', paper: 'scissors', scissors: 'rock'}
    if (p1 === p2) return "Draw!";
    if (p1 === foil[p2]) return "Player 1 won!";
    else return "Player 2 won!"
};