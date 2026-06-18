'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        let comparsionResult;

        if (compareFunction) {
          comparsionResult = compareFunction(this[i], this[i + 1]);
        } else {
          if (String(this[i]) > String(this[i + 1])) {
            comparsionResult = 1;
          } else if (String(this[i]) < String(this[i + 1])) {
            comparsionResult = -1;
          } else {
            comparsionResult = 0;
          }
        }

        if (comparsionResult > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;

          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
