'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (
          compareFunction
            ? compareFunction(this[i], this[j]) > 0
            : String(this[i]) > String(this[j])
        ) {
          const box = this[j];

          this[j] = this[i];
          this[i] = box;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

applyCustomSort();
