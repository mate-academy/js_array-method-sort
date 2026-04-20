'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function getComparisonFunction(compareFunction) {
    if (typeof compareFunction === 'function') {
      return compareFunction;
    } else {
      return function (a, b) {
        if (a.toString() > b.toString()) {
          return 1;
        }

        if (b.toString() > a.toString()) {
          return -1;
        }

        return 0;
      };
    }
  }

  [].__proto__.sort2 = function (compareFunction) {
    const compare = getComparisonFunction(compareFunction);

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
