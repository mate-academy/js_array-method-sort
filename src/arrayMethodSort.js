'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let callback = compareFunction;

    if (callback === undefined) {
      callback = function (a, b) {
        return a > b;
      };
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        const greaterFirstValue = callback(
          String(this[i]),
          String(this[i + 1]),
        );

        if (greaterFirstValue) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
