var titleCase = require('./../../src/demo/functions').titleCase;

var expect = require('chai').expect;

expect(titleCase('the great mouse detective')).to.be.a('string');
expect(titleCase('a')).to.equal('A');
//expect(titleCase('a  b')).to.equal('A  B');
expect(titleCase('vertigo')).to.equal('Vertigo');
expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');