'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringSort) {
    let marker = 0;

    do {
      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          marker++;
        }
      }
    } while (marker > 0);

    return this;
  };

  function stringSort(a, b) {
    return String(a) > String(b)
      ? 1
      : -1;
  }
}

module.exports = applyCustomSort;
