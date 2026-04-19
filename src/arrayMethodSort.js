'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;

    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(`${compareFunction} is not a function`);
    }

    for (let i = 0; i < arr.length - 1; i++) {
      let swapped = false;

      for (let j = 0; j < arr.length - 1 - i; j++) {
        if (compareFunction) {
          if (compareFunction(arr[j], arr[j + 1]) > 0) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
          }
        } else {
          if (String(arr[j]) > String(arr[j + 1])) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
          }
        }
      }

      if (!swapped) {
        break;
      }
    }

    return arr;
  };

  // eslint-disable-next-line no-extend-native
  Array.prototype.sort = function (compareFunction) {
    return this.sort2(compareFunction);
  };
}

module.exports = applyCustomSort;
