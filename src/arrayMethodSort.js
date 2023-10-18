'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return String(a) > String(b);
  }) {
    for (let j = 0; j < this.length; j++) {
      for (let i = 1; i < this.length; i++) {
        const current = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i] = this[i - 1];
          this[i - 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
