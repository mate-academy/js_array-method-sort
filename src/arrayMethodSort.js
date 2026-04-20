'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    const compareFunc =
      typeof callback === 'function'
        ? callback
        : (a, b) => (String(a) > String(b) ? 1 : -1);

    for (let i = 0; i < this.length - 1; i++) {
      let isSwapped = false;

      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunc(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          isSwapped = true;
        }
      }

      if (!isSwapped) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
