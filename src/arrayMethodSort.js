'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const comparator = compareFunction || ((a, b) => `${a}` > `${b}`);
    const len = this.length;

    for (let i = 0; i < len; i++) {
      let sorted = true;

      for (let j = 0; j < len - i - 1; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          sorted = false;
        }
      }

      if (sorted) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
