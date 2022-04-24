var checkForShip = require('./shipMethods.js').checkForShip;

// validate if the given coordinate is within the range (square 10x10) and not occupied by any ship yet
function validateLocation(player, coordinate) {
  var x = coordinate[0];
  var y = coordinate[1];

  var spaceAvailable = !checkForShip(player, coordinate);

  if ((x <= 9 && x >= 0) && (y <= 9 && y >= 0)) {
    return spaceAvailable; // decides whether this valid space is occupied
  } else {
    return false;
  }
}

// validate if all the given locations are valid for a player
function validateLocations(player, locations) {
  var validated = locations.map(function(location) {
    return validateLocation(player, location);
  });
  return validated.indexOf(false) === -1; // if array contains all true
}

// place a ship in the map, given its size, starting coordinate and direction (vertical or horizontal)
function placeShip(player, ship, startingCoordinate, direction) {
  if (!direction) throw Error('You left out the direction! I need that for math!');
  var proposedLocations = [];
  var previousLocation,
    rowNumber,
    columnNumber;

  for (var i = 0; i < ship.size; i++) {
    previousLocation = proposedLocations[i - 1] || [];
    rowNumber = previousLocation[0];
    columnNumber = previousLocation[1];

    proposedLocations[i] = (i === 0) ? startingCoordinate :
      (direction === 'horizontal') ? [rowNumber, ++columnNumber] :
      [++rowNumber, columnNumber];
  }

  if (validateLocations(player, proposedLocations)) {
    ship.locations = proposedLocations;
  } else {
    return false;
  }
}

module.exports = {
  placeShip: placeShip,
  validateLocations: validateLocations,
  validateLocation: validateLocation,
};
