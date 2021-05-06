'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let comparator = compareFunction;

    if (comparator === undefined) {
      comparator = (a, b) => a.toString() > b.toString();
    }

    let tmpValue;

    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          tmpValue = this[j];
          this[j] = this[j + 1];
          this[j + 1] = tmpValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
