'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let comparator;

    if (compareFunction) {
      comparator = compareFunction;
    } else {
      comparator = (a, b) => String(a).localeCompare(String(b));
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (comparator(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
