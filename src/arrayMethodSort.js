'use strict';

/**
 * Implement method Sort
 */
function compareStrings(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let iterator;

    do {
      iterator = 0;

      // `sort iteration` : swapping each 2 items of [this],
      // nested in do...while iterator to accomplish the full sorting
      // e.g. [3,2,1] -> [2,1,3] (iteration that requires another sort)
      for (let i = 1; i < this.length; i++) {
        const item = this[i];
        const prevItem = this[i - 1];

        if (compareFunction(prevItem, item) > 0) {
          this[i - 1] = item;
          this[i] = prevItem;
          iterator++;
        }
      }
    } while (iterator > 0);

    return this;
  };
}

module.exports = applyCustomSort;
