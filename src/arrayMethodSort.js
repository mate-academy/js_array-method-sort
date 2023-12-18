'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compareByCodePoints = (a, b) => {
      for (let i = 0; i <= Math.max(a.toString().length,
        b.toString().length); i++) {
        if (a.toString().codePointAt(i) > b.toString().codePointAt(i)) {
          return 1;
        } else if (a.toString().codePointAt(i) < b.toString().codePointAt(i)) {
          return -1;
        }
      }

      return 0;
    };

    const comparator = compareFunction || compareByCodePoints;

    let swapp;

    do {
      swapp = false;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (comparator(a, b) > 0) {
          this[i] = b;
          this[i + 1] = a;
          swapp = true;
        }
      }
    } while (swapp === true);

    return this;
  };
}

module.exports = applyCustomSort;
