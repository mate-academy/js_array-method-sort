'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFn = (a, b) => String(a) > String(b)) {
    const PENULTIMATE_INDEX = this.length - 1;

    for (let i = 0; i < PENULTIMATE_INDEX; i++) {
      for (let j = 0; j < PENULTIMATE_INDEX - i; j++) {
        if (compareFn(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
