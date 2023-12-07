'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return a.toString() > b.toString();
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
