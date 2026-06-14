'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError('The comparator must be a function or undefined.');
    }

    const array = this;
    const n = array.length;

    for (let i = 0; i < n - 1; i++) {
      let swapped = false;

      for (let j = 0; j < n - 1 - i; j++) {
        let comparisonResult;

        if (typeof compareFunction === 'function') {
          comparisonResult = compareFunction(array[j], array[j + 1]);
        } else {
          const strA = String(array[j]);
          const strB = String(array[j + 1]);

          comparisonResult = (strA > strB) - (strA < strB);
        }

        if (comparisonResult > 0) {
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
          swapped = true;
        }
      }

      if (swapped === false) {
        break;
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
