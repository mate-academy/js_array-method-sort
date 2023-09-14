'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortAsString) {
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

function sortAsString(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}

module.exports = applyCustomSort;
