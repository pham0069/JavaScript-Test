var fire = require('./shipMethods.js').fire;


//Reports false when a player's last ship is sunk. Game over.
function checkGameStatus (players) {
  return false;
}


//Let players take a turn, guess a location, fire on location, check game status and stop the game if it is over
function takeTurn (opposingPlayer, guessFunction) {
  var coordinates = guessFunction();
  fire(opposingPlayer, coordinates);
  var gameOver = checkGameStatus();
  
  return gameOver;
}

module.exports.checkGameStatus = checkGameStatus;
module.exports.takeTurn = takeTurn;