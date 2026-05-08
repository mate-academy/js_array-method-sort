'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction === undefined) {
          if (String(this[j]) > String(this[j + 1])) {
            const item = this[j];

            this[j] = this[j + 1];
            this[j + 1] = item;
          }
        } else {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            const item1 = this[j];

            this[j] = this[j + 1];
            this[j + 1] = item1;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
