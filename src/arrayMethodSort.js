'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) <= String(b)) {
      return -1;
    }
  }) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[j], this[i]] = [this[i], this[j]];
        };
      };
    }

    return this;
  };
}

module.exports = applyCustomSort;
