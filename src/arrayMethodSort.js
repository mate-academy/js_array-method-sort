'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFunction = (a, b) => {
    return `${a}` > `${b}`;
  };

  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const shouldSwap = compareFunction(this[j], this[j + 1]) > 0;

        if (shouldSwap) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
