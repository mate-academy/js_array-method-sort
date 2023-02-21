'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compare = compareFunction
    || ((a, b) => a.toString() > b.toString() ? 1 : -1);

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const res = compare(this[i], this[j]);

        if (res > 0) {
          const [first, second] = [this[j], this[i]];

          this[i] = first;
          this[j] = second;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
