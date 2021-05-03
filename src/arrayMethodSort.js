'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let comparator = compareFunction;

    if (comparator === undefined) {
      comparator = function(a, b) {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    }

    let value;

    for (let i = this.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (comparator(this[j], this[j + 1]) > 0) {
          value = this[j];
          this[j] = this[j + 1];
          this[j + 1] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
