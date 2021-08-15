'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringSort) {
    let marker = 1;

    while (marker !== 0) {
      marker = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) >= 1) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          marker++;
        }
      }
    }

    return this;
  };

  function stringSort(a, b) {
    return String(a) > String(b)
      ? 1
      : -1;
  }
}

module.exports = applyCustomSort;
