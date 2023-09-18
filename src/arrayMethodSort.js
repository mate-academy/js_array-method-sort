'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => String(a) > String(b)
  ) {
    const sourceArray = this;

    for (let i = 0; i < sourceArray.length; i++) {
      for (let j = 0; j < sourceArray.length - 1; j++) {
        const a = sourceArray[j];
        const b = sourceArray[j + 1];
        const compare = compareFunction(a, b);

        if (compare > 0) {
          sourceArray[j] = b;
          sourceArray[j + 1] = a;
        }
      }
    }

    return sourceArray;
  };
}

module.exports = applyCustomSort;
