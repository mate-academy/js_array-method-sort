'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const arr = this;
    const func = (a, b) => {
      const A = String(a);
      const B = String(b);

      if (A < B) {
        return -1;
      }

      if (A > B) {
        return 1;
      }

      return 0;
    };

    const cmp = typeof compareFunction === 'function' ? compareFunction : func;

    for (let i = 1; i < arr.length; i++) {
      const next = arr[i];
      let prevIdx = i - 1;

      while (prevIdx >= 0 && cmp(arr[prevIdx], next) > 0) {
        arr[prevIdx + 1] = arr[prevIdx];
        prevIdx--;
      }
      arr[prevIdx + 1] = next;
    }

    return arr;
  };
}

module.exports = applyCustomSort;
