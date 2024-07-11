'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultCase) {
    for (let i = 0; i < this.length; i++) {
      let min = this[i];
      let minInd = i;

      for (let y = i + 1; y < this.length; y++) {
        const current = this[y];

        if (compareFunction(min, current) > 0) {
          min = current;
          minInd = y;
        }
      }
      [this[i], this[minInd]] = [this[minInd], this[i]];
    }

    return this;
  };
}

function defaultCase(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}
module.exports = applyCustomSort;
