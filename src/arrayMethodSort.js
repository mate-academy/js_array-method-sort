'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let sortFn = compareFunction;

    if (sortFn === undefined) {
      sortFn = (a, b) => {
        const strA = a.toString();
        const strB = b.toString();

        if (strA > strB) {
          return 1;
        } else if (strA < strB) {
          return -1;
        } else {
          return 0;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (sortFn(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
