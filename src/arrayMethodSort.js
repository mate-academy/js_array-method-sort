'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let iterationTagged;

    do {
      iterationTagged = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;
          iterationTagged = true;
        }
      }
    } while (iterationTagged);

    return this;
  };
}

function defaultCompare(a, b) {
  return String(a) > String(b);
}

module.exports = applyCustomSort;
