'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCase) {
    for (let i = 0; i < this.length; i++) {
      for (let y = i + 1; y < this.length; y++) {
        if (compareFunction(this[i], this[y]) > 0) {
          [this[i], this[y]] = [this[y], this[i]];
        }
      }
    }

    return this;
  };
}

function defaultCase(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}
module.exports = applyCustomSort;
