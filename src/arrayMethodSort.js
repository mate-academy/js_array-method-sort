'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareStrings(a, b) {
    return String(a) > String(b) ? 1 : 0;
  }

  [].__proto__.sort2 = function(compareFunction
  = compareStrings) {
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

module.exports = applyCustomSort;
