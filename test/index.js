const proxyquire = require("proxyquire");
const sinon = require("sinon");
const chai = require("chai");
const should = chai.should();

describe("Initial test", function() {
    const debugStub = function() {
        return sinon.stub();
    }

    before(function() {

    });
    context("Addition", function() {
        it('should return 2+2 = 4 ', function() {
            const result = 2 + 2;
            result.should.equal(4);
        })
    });
});
