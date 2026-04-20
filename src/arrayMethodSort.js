'use strict';

/**
 * Implement method sort2, then make sort use it
 */
function applyCustomSort() {
  Object.defineProperty([].__proto__, 'sort2', {
    value: function (compareFunction) {
      const cmp =
        typeof compareFunction === 'function'
          ? compareFunction
          : function (a, b) {
            const strA = String(a);
            const strB = String(b);

            if (strA < strB) {
              return -1;
            }

            if (strA > strB) {
              return 1;
            }

            return 0;
          };

      const arr = this;
      let n = arr.length;
      let swapped = true;

      while (swapped) {
        swapped = false;

        for (let i = 0; i < n - 1; i += 1) {
          if (cmp(arr[i], arr[i + 1]) > 0) {
            const temp = arr[i];

            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swapped = true;
          }
        }
        n -= 1;
      }

      return arr;
    },
    writable: true,
    configurable: true,
  });

  /* eslint-disable no-extend-native */
  Array.prototype.sort = function (compareFunction) {
    return this.sort2(compareFunction);
  };
  /* eslint-enable no-extend-native */
}

module.exports = applyCustomSort;
