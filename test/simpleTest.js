var expect = require('chai').expect;

require('chai').should();
const util = require('../server/utils/utils');

describe('This test', function() {
    it('is expected to work', function() {
        expect(true).to.be.true;
    });
});

describe('randomizer', function() {
    it('should be a function', function() {
        util.randomizer.should.be.a('function');
    });
});

describe('randomizer', function() {
    it('should return a string', function() {
        util.randomizer().should.be.a('string');
    });

});

describe('downloadURI', function() {
    it('should be a function', function() {
        util.downloadURI.should.be.a('function');
    });
});
