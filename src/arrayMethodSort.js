'use strict';

/**
 * Implement method Sort
 */
function defaultCompare(a, b) {
  return a.toString() > b.toString();
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        const resultCompare = compareFunction(this[i], this[n]);

        if (resultCompare > 0) {
          [this[i], this[n]] = [this[n], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
