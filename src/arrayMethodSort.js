'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction === undefined) {
      for (let i = 0; i < this.length - 1; i++) {
        if (String(this[i]) > String(this[i + 1])) {
          const tempValue = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tempValue;

          i = -1;
        }
      }
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const tempValue = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tempValue;

          i = -1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
