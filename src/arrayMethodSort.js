'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1)) {
    let bigger;
    const loopLength = this.length - 1;

    for (let k = 1; k > 0; k--) {
      for (let i = 0; i < loopLength; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          bigger = this[i];
          this[i] = this[i + 1];
          this[i + 1] = bigger;
          k++;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
