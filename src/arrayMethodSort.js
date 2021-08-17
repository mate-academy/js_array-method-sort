'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const sortedArray = this;

    let waschange = false;

    do {
      waschange = false;

      for (let i = 1; i < sortedArray.length; i++) {
        if (compareFunction === undefined) {
          if (sortedArray[i - 1].toString() > sortedArray[i].toString()) {
            waschange = true;

            sortedArray.splice(i - 1, 2, sortedArray[i], sortedArray[i - 1]);
          }
        } else {
          if (compareFunction(sortedArray[i - 1], sortedArray[i]) > 0) {
            waschange = true;
            sortedArray.splice(i - 1, 2, sortedArray[i], sortedArray[i - 1]);
          }
        }
      }
    } while (waschange);

    return sortedArray;
  };
}

module.exports = applyCustomSort;
