var expect = require('chai').expect;

// test suite: a name to describe the suite, a function to wrap all the test
describe('Mocha', function() {
    // test spec (unit test)
    it('should run our tests using npm', function () {
        // any var that is truthy (NOT undefined, 0, empty string, null) is ok
        expect(true).to.be.ok;
    });
});