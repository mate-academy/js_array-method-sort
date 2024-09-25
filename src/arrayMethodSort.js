'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let sortingFunc;

    // Compare elements as strings if compareFunction is omitted
    if (compareFunction !== undefined) {
      sortingFunc = compareFunction;
    } else {
      sortingFunc = (a, b) => {
        if (String(a) === String(b)) {
          return 0;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return -1;
      };
    }

    // Iterate through the array {this.length - 1} amount of times,
    // skipping the sorted values
    for (let maxLength = this.length; maxLength > 0; maxLength--) {
      for (let i = 1; i < maxLength; i++) {
        const a = this[i - 1];
        const b = this[i];
        const comparisonResult = sortingFunc(a, b);

        // Swap objects positions if the result of comparison is positive
        if (comparisonResult > 0) {
          this[i - 1] = b;
          this[i] = a;
        }
      }
    }

    // Return the sorted array
    return this;
  };
}

module.exports = applyCustomSort;
