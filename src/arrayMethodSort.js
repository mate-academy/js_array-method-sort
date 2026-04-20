'use strict';
/* eslint-disable */

/**
 * Implement method Sort
 */
function applyCustomSort() {
  Array.prototype.sort2 = function (compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            // спеціально обробляємо undefined (включаючи "дірки")
            if (a === undefined && b === undefined) return 0;
            if (a === undefined) return 1; // a в кінець
            if (b === undefined) return -1; // b в кінець

            const A = String(a);
            const B = String(b);

            if (A > B) return 1;
            if (A < B) return -1;
            return 0;
          };

    const len = this.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
