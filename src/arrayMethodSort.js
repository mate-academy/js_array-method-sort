'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const array = this;
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (compareFunction) {
          if (compareFunction(array[j], array[j + 1]) > 0) {
            const temp = array[j];

            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        } else {
          if (String(array[j]) > String(array[j + 1])) {
            const temp = array[j];

            array[j] = array[j + 1];
            array[j + 1] = temp;
          }
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
