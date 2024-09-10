'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    // Bubble sort
    let compareFunction = callback;

    if (callback === undefined) {
      compareFunction = (a, b) => (`${a}` > `${b}` ? 1 : 0);
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const compareResult = compareFunction(this[j], this[j + 1]);

        if (compareResult > 0) {
          const temp = this[j + 1];

          this[j + 1] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
