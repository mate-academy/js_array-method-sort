'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let d = compareFunction;

    if (typeof d !== 'function') {
      d = (a, b) => (a.toString() > b.toString() ? 1 : -1);
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let g = i + 1; g < this.length; g++) {
        if (d(this[i], this[g]) > 0) {
          const element = this[i];

          this[i] = this[g];
          this[g] = element;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
