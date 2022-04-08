'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(a, b) {
    const first = String(a);
    const second = String(b);

    if (first > second) {
      return 1;
    } else if (first < second) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    /* [].__proto__.sort2 = function(compareFunction = callback) {
      for (let i = 0; i < this.length; i++) {
        for (let k = 0; k < this.length; k++) {
          const num1 = this[k];
          const num2 = this[k + 1];

          if (compareFunction(num1, num2) > 0) {
            this[k] = num2;
            this[k + 1] = num1;
          }
        }
      }
    }; */

    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          this[i - 1] = second;
          this[i] = first;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
