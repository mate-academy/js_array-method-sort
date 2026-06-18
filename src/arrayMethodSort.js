'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction && typeof compareFunction !== 'function') {
      throw new TypeError(
        'Функція порівняння має бути функцією або невизначеною',
      );
    }

    const array = this;
    const length = array.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        const shouldSwap = compareFunction
          ? compareFunction(array[j], array[j + 1]) > 0
          : String(array[j]) > String(array[j + 1]);

        if (shouldSwap) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
