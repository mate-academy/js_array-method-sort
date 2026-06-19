'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return (a.toString() > b.toString()) ? 1 : -1;
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let n = 0; n < this.length - 1; n++) {
        if (compareFunction(this[n + 1], this[n]) < 0) {
          const currentValue = this[n];

          this[n] = this[n + 1];
          this[n + 1] = currentValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
