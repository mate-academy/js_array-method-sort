'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let isSwapped;

    do {
      isSwapped = false;

      for (let i = 0; i < this.length; i++) {
        const condition = compareFunction
          ? compareFunction(this[i], this[i + 1]) > 0
          : String(this[i]) > String(this[i + 1]);

        if (condition) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          isSwapped = true;
        }
      }
    } while (isSwapped);

    return this;
  };
}

module.exports = applyCustomSort;
