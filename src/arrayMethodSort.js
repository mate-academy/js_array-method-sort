'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (String(a) > String(b)) {
        return 1;
      } else if (String(a) < String(b)) {
        return -1;
      } else {
        return 0;
      }
    },
  ) {
    const array = this;

    for (let j = 0; j < array.length - 1; j++) {
      for (let i = 0; i < array.length - 1 - j; i++) {
        if (compareFunction(array[i], array[i + 1]) > 0) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
