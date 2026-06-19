'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = compareFunction;

    // compare function default - comparing as strings
    if (compare === undefined
      || typeof compare !== 'function') {
      compare = (a, b) => {
        const _a = String(a);
        const _b = String(b);

        // not sure why localCompare would not work for cyryllic letters
        if (_a > _b) {
          return 1;
        }

        if (_b > _a) {
          return -1;
        }

        return 0;
      };
    }

    // variable for do while loop
    let sorting;

    do {
      sorting = false;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compare(a, b) > 0) {
          this[i] = b;
          this[i + 1] = a;
          sorting = true;
        }
      }
    } while (sorting);

    // returning sorted arrays
    return this;
  };
}

module.exports = applyCustomSort;
