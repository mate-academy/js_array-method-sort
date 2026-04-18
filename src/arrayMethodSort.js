'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const array = this;

    const compareFunctionHelper =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => {
            const aCode = String(a).charCodeAt(0);
            const bCode = String(b).charCodeAt(0);

            if (a === undefined) {
              return 1;
            }

            if (b === undefined) {
              return -1;
            }

            if (a === undefined && b === undefined) {
              return 0;
            }

            if (aCode < bCode) {
              return -1;
            }

            if (aCode > bCode) {
              return 1;
            }

            return String(a).localeCompare(String(b));
          };

    for (let i = 0; i < array.length; i++) {
      for (let y = i + 1; y < array.length; y++) {
        const hasI = i in array;
        const hasY = y in array;
        const a = hasI ? array[i] : undefined;
        const b = hasY ? array[y] : undefined;

        if (compareFunctionHelper(a, b) > 0) {
          const result = array[i];

          array[i] = array[y];
          array[y] = result;
        }
      }
    }

    return array;
  };
}

module.exports = applyCustomSort;
