'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (this.length === 0) {
      return this;
    }

    let isUpdated;
    const defCompareFunc = compareFunction
    || ((a, b) => (a + '') > (b + '') ? 1 : -1);

    do {
      isUpdated = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (defCompareFunc(this[i], this[i + 1]) > 0) {
          const a = this[i];

          this[i] = this[i + 1];
          this[i + 1] = a;
          isUpdated = true;
        }
      }
    } while (isUpdated);

    return this;
  };
}

module.exports = applyCustomSort;
