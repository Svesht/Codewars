//Original solution

function high(x){
    const words = x.split(' ');
    const scores = words.map(word => word.split('').reduce((sum, letter) => sum + letter.charCodeAt() - 96, 0))
    let max = 0;
    for (const score of scores) {
        if (score > max) max = score;
    }
    return words[scores.indexOf(max)];
}