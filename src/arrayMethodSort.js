'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const actualCompareFunction = compareFunction || ((elem1, elem2) =>
      elem1.toString() > elem2.toString());

    const customSort = (array) => {
      let swapped = true;

      while (swapped) {
        swapped = false;

        for (let i = 0; i < array.length - 1; i++) {
          if (actualCompareFunction(array[i], array[i + 1]) > 0) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]];
            swapped = true;
          }
        }
      }

      return array;
    };

    customSort(this);

    return this;
  };
}

module.exports = applyCustomSort;
