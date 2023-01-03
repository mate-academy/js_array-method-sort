'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) > String(b)
    || a === undefined) {
      return 1;
    }

    if (String(a) === String(b)) {
      return 0;
    }

    return -1;
  }) {
    let prevElem;
    let currentElem;
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prevElem = this[i - 1];
        currentElem = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = currentElem;
          this[i] = prevElem;
          count++;
        }
      }
    } while (count !== 0);

    return this;
  };
};
module.exports = applyCustomSort;
