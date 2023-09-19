'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return a.toString() > b.toString() ? 1 : -1;
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const tmp = this[i];

          this[i] = this[j];
          this[j] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
