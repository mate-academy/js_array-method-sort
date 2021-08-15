'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = initialCompare) {
    let count = 1;

    while (count) {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          count++;
        }
      }
    }

    return this;
  };

  const initialCompare = (a, b) => {
    const firstItem = String(a);
    const secondItem = String(b);

    if (firstItem === secondItem) {
      return 0;
    }

    return firstItem > secondItem ? 1 : -1;
  };
}

module.exports = applyCustomSort;
