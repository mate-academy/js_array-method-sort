'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    for (let i = 0; i < this.length; i++) {
      for (let o = 0; o < this.length - 1 - i; o++) {
        let shouldSwap;

        if (typeof compareFunction === 'function') {
          shouldSwap = compareFunction(this[o], this[o + 1]) > 0;
        } else {
          shouldSwap = String(this[o]) > String(this[o + 1]);
        }

        if (shouldSwap) {
          [this[o], this[o + 1]] = [this[o + 1], this[o]];
        }
      }
    }

    return this;
  };
  /* eslint-disable-next-line no-extend-native */
  Array.prototype.sort = [].__proto__.sort2;
}

module.exports = applyCustomSort;
