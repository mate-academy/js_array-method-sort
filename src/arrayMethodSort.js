'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const comparator =
      typeof compareFunction === 'function'
        ? compareFunction
        : getDefaultComparator();

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

function getDefaultComparator() {
  return (a, b) => (String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0);
}

module.exports = applyCustomSort;
