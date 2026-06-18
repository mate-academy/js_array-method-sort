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

    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];
        let shouldSwap = false;

        if (compareFunction) {
          if (compareFunction(a, b) > 0) {
            shouldSwap = true;
          }
        } else {
          if (String(a) > String(b)) {
            shouldSwap = true;
          }
        }

        if (shouldSwap) {
          const temp = this[i];

          this[i] = this[i + 1];

          this[i + 1] = temp;

          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };

  [].__proto__.sort = [].__proto__.sort2;
}

module.exports = applyCustomSort;
