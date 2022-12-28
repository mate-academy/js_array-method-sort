'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = comparator) {
    let temp = 0;

    for (let i = 0; i < this.length - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;
        i = -1;
      }
    }

    return this;
  };

  function comparator(x, y) {
    const stringX = String(x);
    const stringY = String(y);

    if (stringX > stringY) {
      return 1;
    }

    if (stringX === stringY) {
      return 0;
    }

    return -1;
  };
}

module.exports = applyCustomSort;
