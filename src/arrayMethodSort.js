'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b)
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const currentEl = this[i];
        const prevEl = this[j];

        if (compareFunction(currentEl, prevEl) > 0) {
          this[i] = prevEl;
          this[j] = currentEl;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
