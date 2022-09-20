'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  compareFuncAsOriginalArraySortMethod) {
    let count = 1;

    while (count > 0) {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const result = compareFunction(this[i], this[i + 1]);

        if (result > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          count++;
        }
      }
    }

    return this;
  };

  function compareFuncAsOriginalArraySortMethod(firstElement, secondElement) {
    const firstItem = firstElement.toString();
    const secondItem = secondElement.toString();

    if (firstItem > secondItem) {
      return 1;
    }

    if (firstItem < secondItem) {
      return -1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
