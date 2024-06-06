'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare;
    let replaced;
    let arrayLength = this.length;

    if (typeof compareFunction === 'function') {
      compare = compareFunction;
    } else {
      compare = (a, b) => {
        const aToString = String(a);
        const bToString = String(b);

        if (aToString < bToString) {
          return -1;
        }

        if (aToString > bToString) {
          return 1;
        }

        return 0;
      };
    }

    do {
      replaced = false;

      for (let i = 0; i < arrayLength - 1; i++) {
        if (compare(this[i], this[i + 1]) > 0) {
          const current = this[i];

          this[i] = this[i + 1];
          this[i + 1] = current;
          replaced = true;
        }
      }
      arrayLength--;
    } while (replaced);

    return this;
  };
}

module.exports = applyCustomSort;
