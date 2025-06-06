'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;
    const length = array.length;

    if (length <= 1) {
      return array;
    }

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] === undefined || array[j + 1] === undefined) {
          continue;
        }

        let compareResult;

        if (compareFunction) {
          compareResult = compareFunction(array[j], array[j + 1]);
        } else {
          compareResult = String(array[j]) > String(array[j + 1]) ? 1 : -1;
        }

        if (compareResult > 0) {
          const temp = array[j];

          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
