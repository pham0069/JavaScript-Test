var expect = require('chai').expect;

// BDD styles are expect and should. 
// Use chainable language to construct assertions
expect(true).to.be.true;


// not: negate all assertions that follow in the chain
expect({a: 1}).to.not.have.property('b');
expect([1, 2]).to.be.an('array').that.does.not.include(3);

// deep: causes all {equal, include, members, keys, property} assertions 
// that follow in the chain to use deep equality instead of strict (===) equality
expect({a: 1}).to.deep.equal({a: 1}); //object equal
expect({a: 1}).to.not.equal({a: 1});

expect([{a: 1}]).to.deep.include({a: 1}); // array include
expect([{a: 1}]).to.not.include({a: 1}); 

expect([{a: 1}]).to.have.deep.members([{a: 1}]); // arrray member
expect([{a: 1}]).to.not.have.members([{a: 1}]);

expect(new Set([{a: 1}])).to.have.deep.keys([{a: 1}]); // set has key
expect(new Set([{a: 1}])).to.not.have.keys([{a: 1}]);

expect({x: {a: 1}}).to.have.deep.property('x', {a: 1}); // object property

