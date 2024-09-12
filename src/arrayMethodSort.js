'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareF) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const spare = this[i];

          this[i] = this[j];
          this[j] = spare;
        }
      }
    }

    return this;
  };
}

function compareF(a, b) {
  return a.toString() > b.toString();
}

module.exports = applyCustomSort;
