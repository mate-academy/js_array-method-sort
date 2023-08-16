'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompare = (a, b) => String(a) > String(b);
    const compare = compareFunction || defaultCompare;
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      for (let j = i + 1; j < arrayLength; j++) {
        const [current, next] = [this[i], this[j]];

        if (compare(current, next) > 0) {
          [this[i], this[j]] = [next, current];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
