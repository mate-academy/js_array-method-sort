'use strict';

/**
 * Implement method Sort
 */
const defaultCompare = (a, b) => {
  return `${a}` < `${b}`
    ? -1
    : `${a}` > `${b}`
      ? 1
      : 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const compare = compareFunction(this[j], this[j + 1]);

        if (compare > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
