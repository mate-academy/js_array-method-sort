'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    let isChanged = true;

    while (isChanged) {
      isChanged = false;

      for (let i = 0; i < this.length - 1; i++) {
        const before = this[i];
        const after = this[i + 1];

        if (compareFunction(this[i], this[i + 1]) > 0) {
          this[i] = after;
          this[i + 1] = before;
          isChanged = true;
        }
      }
    }

    return this;
  };

  function stringCompare(a, b) {
    const prev = a.toString();
    const current = b.toString();

    if (prev <= current) {
      return -1;
    } else {
      return 1;
    }
  }
}

module.exports = applyCustomSort;
