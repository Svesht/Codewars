//Original solution

function points(games) {
   return games.reduce((total, game) => {
      game = game.split(':');
      if (game[0] > game[1]) return total += 3;
      if (game[0] === game[1]) return total += 1;
      return total;
   }, 0);
}