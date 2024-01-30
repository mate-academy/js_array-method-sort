'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const result = this;

    function compareFunctionDefault(item1, item2) {
      return item1.toString() > item2.toString();
    }

    const currentSortFunction = compareFunction
    === undefined ? compareFunctionDefault : compareFunction;

    for (let i = 0; i < result.length; i++) {
      for (let j = 0; j < (result.length - i - 1); j++) {
        if (currentSortFunction(result[j], result[j + 1]) > 0) {
          const temp = result[j];

          result[j] = result[j + 1];
          result[j + 1] = temp;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomSort;
