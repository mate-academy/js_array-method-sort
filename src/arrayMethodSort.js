'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const currentValue = this[j];
        const nextValue = this[j + 1];

        if (compareFunction === undefined) {
          if (String(currentValue) > String(nextValue) > 0) {
            this[j] = nextValue;
            this[j + 1] = currentValue;
          }
        } else {
          if (compareFunction(currentValue, nextValue) > 0) {
            this[j] = nextValue;
            this[j + 1] = currentValue;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
