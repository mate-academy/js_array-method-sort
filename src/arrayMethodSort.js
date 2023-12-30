'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultComparison) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < i; j++) {
        if (compareFunction(this[j], this[i]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

function defaultComparison(a, b) {
  return a.toString() > b.toString();
};

module.exports = applyCustomSort;
