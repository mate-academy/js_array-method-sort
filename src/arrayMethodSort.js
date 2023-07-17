'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (item1, item2) => {
    if (String(item1) > String(item2)) {
      return 1;
    }

    return -1;
  }) {
    for (let j = 0; j < this.length - 1; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
