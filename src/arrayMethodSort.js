'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFunc = (a, b) => {
    return `${a}` > `${b}`;
  };

  [].__proto__.sort2 = function(compareFunction = defaultFunc) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let n = 0; n < this.length - i - 1; n++) {
        const swap = compareFunction(this[n], this[n + 1]) > 0;

        if (swap) {
          [this[n], this[n + 1]] = [this[n + 1], this[n]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
