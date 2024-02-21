'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let compare = compareFunction;

    if (!compareFunction) {
      compare = function(a, b) {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    }

    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - i - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const current = this[j];

          this[j] = this[j + 1];
          this[j + 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
