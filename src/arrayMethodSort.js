'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare = compareFunction;

    if (typeof compare !== 'function') {
      compare = (a, b) => {
        return a.toString() > b.toString()
          ? 1
          : a.toString() < b.toString()
            ? -1
            : 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };

  return [].__proto__.sort2();
}

module.exports = applyCustomSort;
