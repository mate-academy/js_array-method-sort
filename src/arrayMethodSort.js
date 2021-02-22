'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function defaultCompare(current, next) {
    const currentValue = String(current);
    const nextValue = String(next);

    if (currentValue > nextValue) {
      return 1;
    } else if (currentValue < nextValue) {
      return -1;
    } else {
      return 0;
    }
  }

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let isChange;

    do {
      isChange = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          isChange = true;
        }
      }
    } while (isChange);

    return this;
  };
}

module.exports = applyCustomSort;
