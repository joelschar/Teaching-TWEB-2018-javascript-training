
const { expect } = require('chai');
const { arraySum, nonUniqueElements, longRepeat } = require('../src/training');

describe('Synchronous', () => {
  it('should sum values in an array', () => {
    expect(arraySum([1, 2, 3, 4])).to.equal(10, 'Example 1');
    expect(arraySum([3, 3, '3'])).to.equal(9, 'Example 2');
    expect(arraySum([1, null, 4])).to.equal(5, 'Example 3');
    expect(arraySum([])).to.equal(0, 'Example 4');
  });

  it('should return nonUniqueElements', () => {
    expect(nonUniqueElements([1, 2, 3, 1, 3])).to.eql([1, 3, 1, 3], 'Example 1');
    expect(nonUniqueElements([1, 2, 3, 4, 5])).to.eql([], 'Example 2');
    expect(nonUniqueElements([5, 5, 5, 5, 5])).to.eql([5, 5, 5, 5, 5], 'Example 3');
    expect(nonUniqueElements([10, 9, 10, 10, 9, 8])).to.eql([10, 9, 10, 10, 9], 'Example 4');
  });

  it('should return the length of longest repeating sequence', () => {
    expect(longRepeat('sdsffffse')).to.eql(4, 'Example 1');
    expect(longRepeat('ddvvrwwwrggg')).to.eql(3, 'Example 2');
    expect(longRepeat('aa')).to.eql(2, 'Example 3');
  });
});
