'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let counter = 0;

    // in the worst case there should be (this.length-1) passes of the array
    while (counter < this.length - 1) {
      for (let i = 0; i < this.length - 1; i++) {
        let compareFunctionResult = 0;

        // if compareFunction is not supplied
        // compare items as Strings
        arguments.length === 0
          ? compareFunctionResult = this[i].toString() > this[i + 1].toString()
          : compareFunctionResult = compareFunction(this[i], this[i + 1]);

        if (compareFunctionResult > 0) {
          // swap values
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }

      counter++;
    }

    return this;
  };
}

module.exports = applyCustomSort;
