'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    };

    return this;
  };

  const compareStrings = function(a, b) {
    return a.toString() > b.toString()
      ? 1
      : a.toString() < b.toString()
        ? -1
        : 0;
  };
}

module.exports = applyCustomSort;
