'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (a.toString() > b.toString()) {
      return 1;
    }

    if (a.toString() < b.toString()) {
      return -1;
    }

    return 0;
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i + 1; k < this.length; k++) {
        if (compareFunction(this[i], this[k]) > 0) {
          const valueI = this[i];

          this[i] = this[k];
          this[k] = valueI;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
