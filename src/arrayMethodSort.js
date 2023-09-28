'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        if (compareFunction(this[j - 1], this[j]) > 0) {
          [this[j - 1], this[j]] = [this[j], this[j - 1]];
        }
      }
    }

    return this;
  };
}

function defaultCompareFunction(item1, item2) {
  return (item1.toString() > item2.toString()) ? 1 : 0;
}

module.exports = applyCustomSort;
