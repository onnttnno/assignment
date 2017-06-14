var assert = require('assert');
var expect = require('chai').expect;

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });

  describe('Plus', function() {
    it('should return a number only', function() {
        var p2 = new Plus(99999999,99999999999999);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Plus(-99999999,99999999999999);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Plus("-99999999","99999999999999");
        expect(p2.calculated()).to.be.a('Int');

    });
  });

  describe('Minus', function() {
    it('should return a number only', function() {
        var p2 = new Minus(99999999,99999999999999);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Minus(-99999999,99999999999999.625);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Minus("-99999999","99999999999999");
        expect(p2.calculated()).to.be.a('Int');

    });
  });


  describe('Multi', function() {
    it('should return a number only', function() {
        var p2 = new Multi(99999999,99999999999999.522);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Multi(-99999999,99999999999999.768);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Multi("-99999999","99999999999999ll");
        expect(p2.calculated()).to.be.a('Int');

    });
  });

  describe('Devide', function() {
    it('should return a number only', function() {
        var p2 = new Devide(99999999,99999999999999.522);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Devide(-99999999,99999999999999.768);
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Devide("-99999999","99999999999999ll");
        expect(p2.calculated()).to.be.a('Int');

        var p2 = new Devide("-99999999","0");
        expect(p2.calculated()).to.be.a('string');

    });
  });


});
