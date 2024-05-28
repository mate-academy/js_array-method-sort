'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultCompare(a, b) {
    if (a.toString() < b.toString()) {
      return -1;
    }

    if (a.toString() > b.toString()) {
      return 1;
    }

    return 0;
  }

  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    if (this.length === 0) {
      return this;
    }

    const compare = compareFunction;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j + 1], this[j]] = [this[j], this[j + 1]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
