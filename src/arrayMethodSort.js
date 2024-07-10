'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (String(a) < String(b)) {
        return -1;
      }

      if (String(a) > String(b)) {
        return 1;
      }

      return 0;
    },
  ) {
    const quickSort = (array) => {
      if (array.length <= 1) {
        return array;
      }

      const pivot = array[0];
      const left = [];
      const right = [];
      const equal = [];

      for (const element of array) {
        const comparison = compareFunction(element, pivot);

        if (comparison < 0) {
          left.push(element);
        } else if (comparison > 0) {
          right.push(element);
        } else {
          equal.push(element);
        }
      }

      return [...quickSort(left), ...equal, ...quickSort(right)];
    };

    const sortedArray = quickSort(this);

    for (let i = 0; i < this.length; i++) {
      this[i] = sortedArray[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
