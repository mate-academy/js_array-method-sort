'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 1; i < this.length; i++) {
      const currentEl = this[i];
      let j = i - 1;

      while (
        j >= 0 &&
        (compareFunction
          ? compareFunction(this[j], currentEl) > 0
          : String(this[j]) > String(currentEl))
      ) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = currentEl;
    }

    return this;
  };
}

module.exports = applyCustomSort;
