'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    // I use the first loop to create an opportunity to compare
    // each element in the array.
    for (let i = 0; i < this.length; i++) {
      // I use the second loop to compare elements in the array.
      for (let k = 0; k < this.length; k++) {
        // With the help of the compareFunction in which the sorting
        // order is specified, I compare the elements in the array.
        if (compareFunction(this[k], this[k + 1]) > 0) {
          // Here, using the logarithm of the location of the variables,
          // I move the sorted elements of the array.
          const sort = this[k];

          this[k] = this[k + 1];
          this[k + 1] = sort;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
