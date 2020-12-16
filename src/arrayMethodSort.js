'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    const arr = [];
    let result;
    let resultFunc;

    if (compareFunction === undefined) {
      resultFunc = (a, b) => String(a) > String(b) ? 1 : -1;
    } else {
      resultFunc = compareFunction;
    }

    for (let i = 0; i < this.length - 1;) {
      result = resultFunc(this[i], this[i + 1]);

      if (result > 0) {
        arr[0] = this[i];
        arr[1] = this[i + 1];
        this[i + 1] = arr[0];
        this[i] = arr[1];
        i = 0;
      }

      if (result < 0) {
        i++;
      }

      if (result === 0) {
        i = 0;
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
