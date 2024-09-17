'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let callback = compareFunction;

    if (!compareFunction) {
      callback = (arg1, arg2) => {
        return '' + arg1 > '' + arg2 ? 1 : -1;
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (callback(this[i], this[j]) > 0) {
          const swap = this[i];

          this[i] = this[j];
          this[j] = swap;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
