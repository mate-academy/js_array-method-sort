'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare =
      compareFunction || ((a, b) => (String(a) > String(b) ? 1 : -1));

    if (typeof compare !== 'function') {
      compare = (a, b) => {
        const lowerA = a.toString().toLowerCase();
        const lowerB = b.toString().toLowerCase();

        if (lowerA === lowerB) {
          return a.toString().localeCompare(b.toString());
        }

        return lowerA.localeCompare(lowerB);
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
