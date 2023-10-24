'use strict';

/**
 * Implement method Sort
 */
/*
realise sort method for array
which repeats the original sort method
the beginning is already there
*/

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) =>
    String(a) > String(b)) {
    const compFn = compareFunction;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compFn(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
