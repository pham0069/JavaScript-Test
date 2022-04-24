const { placeShip } = require("./playerMethods");
const { fire } = require("./shipMethods");

function getRandomCoordinate() {
    var x = Math.floor(Math.random() * 9);
    var y = Math.floor(Math.random() * 9);
    return [x, y];
}
  
function getRandomDirection() {
    return Math.random() > 0.5 ? 'horizontal' : 'vertical';
}

function computerFire(player) {
    var coordinate = getRandomCoordinate();
    fire(player, coordinate);
}

function computePlaceShip(player, ship) {
    var direction = getRandomDirection();
    var coordinate = getRandomCoordinate();

    placeShip(player, ship, coordinate, direction);
}

module.exports = {
    computerFire: computerFire,
    computerPlaceShip: computePlaceShip
}