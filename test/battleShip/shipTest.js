var expect = require('chai').expect;

describe('checkForShip', function() {
    var checkForShip = require('../../src/battleShip/shipMethods').checkForShip;
    var player;

    // run before the whole test suite
    before(function() {
        player = {
            ships: [
                { locations: [ [0, 0], [0, 1] ] },
                { locations: [ [1, 0], [1, 1] ] },
                { locations: [ [2, 0], [2, 1], [2, 2], [2, 3] ] }
            ]
        };
    });
    it('should correctly report no ship at a given player coordinate', function() {
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should correctly report ship at a given player coordinate', function() {
        expect(checkForShip(player, [0, 0])).to.be.deep.equal(player.ships[0]);
    });

    it('should handle checking ship located at more than 1 coordinate', function() {
        expect(checkForShip(player, [0, 0])).to.be.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 1])).to.be.deep.equal(player.ships[0]);
        expect(checkForShip(player, [9, 9])).to.be.false;
    });

    it('should handle checking multiple ships', function() { 
        expect(checkForShip(player, [0, 0])).to.be.deep.equal(player.ships[0]);
        expect(checkForShip(player, [0, 1])).to.be.deep.equal(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.be.deep.equal(player.ships[1]);
        expect(checkForShip(player, [1, 1])).to.be.deep.equal(player.ships[1]);
        expect(checkForShip(player, [2, 4])).to.be.false;
        expect(checkForShip(player, [9, 9])).to.be.false;
    });
});

describe('damageShip', function(){
    var damageShip = require('../../src/battleShip/shipMethods').damageShip;

    it ('should register damage on a given ship at a given location', function(){
        var ship = {
            locations: [[0, 0]],
            damage: []
        }

        damageShip(ship, [0, 0]);
        damageShip(ship, [2, 2]);

        expect(ship.damage).to.be.not.empty;
        expect(ship.damage).to.deep.include([0, 0]);
        expect(ship.damage).to.deep.include([2, 2]);

    });
});

describe('fire', function(){
    var fire = require('../../src/battleShip/shipMethods').fire;
    var player;

    // run before each spec it
    beforeEach(function(){
        player = {
            ships: [
                { locations: [ [0, 0] ], damage: [] },
            ]
        }
    });

    it ('should record damage on the given player at a given coordinate', function() {
        fire(player, [0, 0]);
        expect(player.ships[0].damage).to.deep.include([0, 0]);
    });

    it ('should not record damage on the given player if the given coordinate not present on any ship', function() {
        fire(player, [9, 9]);
        expect(player.ships[0].damage).to.not.deep.include([9, 9]);
    });
});
