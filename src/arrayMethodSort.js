'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => String(a) > String(b),
  ) {
    sortArray(this, compareFunction);

    return this;

    function sortArray(originalArray, method) {
      for (let i = 0; i < originalArray.length; i++) {
        for (let j = i + 1; j < originalArray.length; j++) {
          if (method(originalArray[i], originalArray[j]) > 0) {
            [originalArray[i], originalArray[j]] = [originalArray[j], originalArray[i]];
          }
        }
      }
    }
  };
}

module.exports = applyCustomSort;
