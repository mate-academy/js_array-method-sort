'use strict';

/**
 * Implement method Sort
 */
function compareTo(a, b) {
  return a.toString() > b.toString() ? 1 : -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const sortFunction = compareFunction || compareTo;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (sortFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
