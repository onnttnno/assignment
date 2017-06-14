
//this is superclass for operate value
function Operate (val1,val2) {
  this.val1 = val1;
  this.val2 = val2;
}

Operate.prototype.calculated = function () {
  console.log(' ...');
}

//plus value
class Plus extends Operate {
  calculated() {

    return this.val1+this.val2;
  }
}


//Minus value
class Minus extends Operate {
  calculated() {

    return this.val1-this.val2;
  }
}

//multiplae
class Multi extends Operate {
  calculated() {

    return this.val1*this.val2;
  }
}


//devide
class Devide extends Operate {
  calculated() {
    if(this.val2 != 0){
      return this.val1/this.val2;
    }
    else{

      return "error becuse number2 equal 0";
    }
  }
}





// Import chai.
let chai = require('chai'),
  path = require('path');
let assert = require('chai').assert;
// Tell chai that we'll be using the "should" style assertions.
chai.should();

// Import the Rectangle class.
let ops = require(path.join(__dirname, '..', 'operate'));

// The fat arrow (=>) syntax is a new way to define
// functions in ES6. One feature that is different
// from the usual "function" keyword is that the scope
// is inherited from the parent, so there is no need to write
//
//   function() {
//     ...
//   }.bind(this)
//
// anymore. In this case we are not using "this" so the new
// syntax is just used for brevity.



describe('Plus', () => {



  let plus;

  plus = new Plus(10, 20);

    it('returns the result', () => {
      // This will fail if "rectangle.width" does
      // not equal 10.

      plus.calculated().should.equal(30);
    });



    it('can be changed', () => {
      // Assert that the width can be changed.
      plus.val1 = 30;
      plus.calculated().should.equal(50);
    });


    it('Is a number', () => {
      // Assert that the width can be changed.
      plus.val1 = 30;
      assert.typeOf(plus.calculated(),'number');
    });

  });



  describe('Minus', () => {



    let minus;

    minus = new Minus(10, 20);

      it('returns the result', () => {
        // This will fail if "rectangle.width" does
        // not equal 10.

        minus.calculated().should.equal(-10);
      });



      it('can be changed', () => {
        // Assert that the width can be changed.
        minus.val2 = -30;
        minus.calculated().should.equal(40);
      });

      it('can be changed (by 0.xxxx)', () => {
        // Assert that the width can be changed.
        minus.val2 = 0.255555;
        minus.calculated().should.equal(9.744445);
      });
      it('Is a number', () => {
        // Assert that the width can be changed.
        minus.val1 = 30;
        assert.typeOf(minus.calculated(),'number');
      });
    });



    describe('Multi', () => {



      let multi;

      multi = new Multi(10, 20);

        it('returns the result', () => {
          // This will fail if "rectangle.width" does
          // not equal 10.

          multi.calculated().should.equal(200);
        });



        it('can be changed', () => {
          // Assert that the width can be changed.
          multi.val1 = -30;
          multi.calculated().should.equal(-600);
        });

        it('can be changed2', () => {
          // Assert that the width can be changed.
          multi.val1 = -0.25;
          multi.calculated().should.equal(-5);
        });

        it('can be changed3', () => {
          // Assert that the width can be changed.
          multi.val1 = -0.25;
          multi.val2 = -100;
          multi.calculated().should.equal(25);
        });

        it('Is a number', () => {
          // Assert that the width can be changed.
          multi.val1 = -30;
          assert.typeOf(multi.calculated(),'number');
        });
      });


  describe('Devide', () => {



            let devide;

            devide = new Devide(10, 20);

              it('returns the result', () => {
                // This will fail if "rectangle.width" does
                // not equal 10.

                devide.calculated().should.equal(0.5);
              });



              it('can be changed', () => {
                // Assert that the width can be changed.
                devide.val1 = -30;
                devide.calculated().should.equal((-3/2));
              });

              it('Is a number', () => {
                // Assert that the width can be changed.
                devide.val1 = 30;
                assert.typeOf(devide.calculated(),'number');
              });

              it('Is a String', () => {
                // Assert that the width can be changed.
                devide.val2 = 0;
                assert.typeOf(devide.calculated(),'string');
              });
            });
