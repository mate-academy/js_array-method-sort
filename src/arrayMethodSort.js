'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let comparator = compareFunction;

    if (!compareFunction) {
      comparator = (lhs, rhs) => {
        const lhsStr = String(lhs);
        const rhsStr = String(rhs);

        if (lhsStr > rhsStr) {
          return 1;
        }

        if (lhsStr < rhsStr) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = this.length - 1; j > i; j--) {
        if (comparator(this[j - 1], this[j]) > 0) {
          [this[j], this[j - 1]] = [this[j - 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
