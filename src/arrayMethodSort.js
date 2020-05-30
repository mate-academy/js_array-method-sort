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
        const current = j;
        const next = j + 1;

        if (comparator(this[current], this[next]) > 0) {
          [this[current], this[next]] = [this[next], this[current]];
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
