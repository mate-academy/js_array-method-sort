'use strict';

/**
 * Implement method Sort
 */
const defaultComparingFunction = (item1, item2) => {
  if (String(item1) > String(item2)) {
    return 1;
  }

  if (String(item1) < String(item2)) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultComparingFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1 + i; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
