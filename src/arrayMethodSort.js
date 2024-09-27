'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const newFunction = function(a, b) {
      if (a === b) {
        return 0;
      }

      return String(a) < String(b) ? -1 : 1;
    };

    const compare = compareFunction || newFunction;
    const array = [...this];

    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (compare(array[j], array[j + 1]) > 0) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    for (let i = 0; i < array.length; i++) {
      this[i] = array[i];
    }

    return this;
  };
}

module.exports = applyCustomSort;
