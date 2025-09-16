'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    return stringA > stringB ? 1 : stringA < stringB ? -1 : 0;
  };

  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    const arr = this;
    let item = arr[0];

    if (
      compareFunction !== undefined &&
      typeof compareFunction !== 'function'
    ) {
      throw new TypeError(
        'The comparison function must be either a function or undefined',
      );
    }

    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (compareFunction(arr[i], arr[j]) > 0) {
          item = arr[i];
          arr[i] = arr[j];
          arr[j] = item;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
