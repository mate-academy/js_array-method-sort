'use strict';

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp = compareFunction;

    if (typeof cmp !== 'function') {
      cmp = (x, y) => {
        const a = String(x);
        const b = String(y);

        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      };
    }

    const arr = this;
    const len = arr.length;

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (cmp(arr[j], arr[j + 1]) > 0) {
          const temp = arr[j];

          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }

    return arr;
  };
}

module.exports = applyCustomSort;
