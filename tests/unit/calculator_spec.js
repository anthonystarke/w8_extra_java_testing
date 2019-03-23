var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {


  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it should be able to add 2 numbers', function(){

    calculator.numberClick(1);
    calculator.operatorClick('+');
    calculator.add(4);
    actual = calculator.runningTotal;
    expected = 5;
    assert.equal(actual,expected);

  })

  it('it should be able to subtract 2 numbers', function(){

    calculator.numberClick(7);
    calculator.operatorClick('-');
    calculator.subtract(4);
    actual = calculator.runningTotal;
    expected = 3;
    assert.equal(actual,expected);
  });

  it('it should be able to multiply 2 numbers', function(){

    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.multiply(3);
    actual = calculator.runningTotal;
    expected = 15;
    assert.equal(actual,expected);
  });

  it('it should be able to divide 2 numbers', function(){

    calculator.numberClick(21);
    calculator.operatorClick('/');
    calculator.divide(7);
    actual = calculator.runningTotal;
    expected = 3;
    assert.equal(actual,expected);
  });


});
