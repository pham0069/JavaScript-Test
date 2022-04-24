var expect = require('chai').expect;

describe('GAME INSTANCE FUNCTIONS', function () {
  describe('checkGameStatus', function () {
    var checkGameStatus = require('../../src/battleShip/gameInstance.js').checkGameStatus;
    it('should tell me when the game is over', function () {
      var players = [
        {
            ships: [
                {
                    locations: [[0, 0]],
                    damage: [[0, 0]]
                }
            ]
        }
      ];
      var actual = checkGameStatus(players);
      expect(actual).to.be.false;
    });
  });
  
  //Let players take a turn, guess a location, fire on location, check game status and stop the game if it is over
  describe('takeTurn', function() {
    var takeTurn = require('../../src/battleShip/gameInstance.js').takeTurn;
    var guess, player;
    
    beforeEach(function () {
      guess = function () { return [0,0] };  //stub function returns a valid coordinates
      player = {
        ships: [
          {
            locations: [[0,0]],
            damage: []
          }
        ]
      }
    });
      
    
    it('should return false if the game ends', function () {
      var actual = takeTurn(player, guess);
      expect(actual).to.be.false;
    });
  });
  
  function saveGame (callback) {
    setTimeout(function () {
      callback();
    }, 1000);
  }
  

// Not work 
// as expectation will be checked before saveGame() is called after 1s
  /*
  describe('saveGame', function () {
    it('should update save status', function () {
      var status = 'Game not saved...';
      
      saveGame(function () {
        status = 'Game saved!';    
      });
      expect(status).to.equal('Game saved!');
    });         
  });
  */


// Not work
// Mocha will let the test pass because it sees no expectation written
// as expectation is written inside saveGame() function
  /*
  describe('saveGame', function () {
    it('should update save status', function () {
      var status = 'Game not saved...';
      
      saveGame(function () {
        status = 'Game saved!';    
        expect(status).to.equal('Game saved!');
        expect(true).to.be.false;
      });
    });         
  });
  */


// Use 'done' arg to allow testing asynchronous code
  describe('saveGame', function () {
    // passing a special arg called 'done' to our test spec callback function
    // to signal Mocha that we want to run our test asynchronously
    // Mocha needs to wait for our instructions before checking expectation
    it('should update save status', function (done) {
      var status = 'Game not saved...';
      
      saveGame(function () {
        status = 'Game saved!';    
        expect(status).to.equal('Game saved!');
        done(); // required, to tell Mocha that our code is ready to be tested
      });
    });         
  });
  
});
