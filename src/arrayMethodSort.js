'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

function defaultCompareFunction(a, b) {
  return a.toString() > b.toString();
}

module.exports = applyCustomSort;
