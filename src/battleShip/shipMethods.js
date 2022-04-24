// check if the given coordinate belongs to any ship of the given player
// return the ship containing the coordinate if present
// otherwise return false
function checkForShip(player, coordinate) {
    var shipPresent = false, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];
        shipPresent = ship.locations.filter(function(shipCoordinate) {
            return (shipCoordinate[0] === coordinate[0]) &&
            (shipCoordinate[1] === coordinate[1]);
        })[0];
        if (shipPresent) {
            return ship;
        }
    }
    return false;
}

// add the given coordinate to the damage list of the given ship
function damageShip(ship, coordinate) {
    ship.damage.push(coordinate);
}

// allow fire the player at the given coordinate
// if the coordinate is located at any player's ship, add it to the player's ship damage
function fire(player, coordinate) {
    var ship = checkForShip(player, coordinate);
    if (ship) {
        damageShip(ship, coordinate);
    }
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;