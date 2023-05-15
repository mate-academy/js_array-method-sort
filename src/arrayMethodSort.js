'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsStrings(a, b) {
    if (String(a) > String(b)) {
      return 1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i], this[i - 1]] = [this[i - 1], this[i]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
