'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const compareFn =
      compareFunction !== undefined ? compareFunction : defaultCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const compareResult = compareFn(this[i], this[j]);

        if (compareResult > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

function defaultCompare(value1, value2) {
  return String(value1) > String(value2)
    ? 1
    : String(value1) < String(value2)
      ? -1
      : 0;
}

module.exports = applyCustomSort;
