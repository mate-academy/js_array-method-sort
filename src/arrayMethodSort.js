'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    this.forEach(() => {
      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        const compare = arguments.length === 0
          ? String(a) > String(b)
          : compareFunction(a, b);

        if (compare > 0) {
          this[i] = b;
          this[i + 1] = a;
        }
      }
    });

    return this;
  };
}

module.exports = applyCustomSort;
