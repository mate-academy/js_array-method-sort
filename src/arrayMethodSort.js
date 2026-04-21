'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let flag;
    let unFlag;

    if (this.length < 1) {
      return;
    }

    if (compareFunction !== undefined) {
      flag = 1;
      unFlag = 0;
    } else {
      flag = 0;
      unFlag = 1;
    }

    while (unFlag === 1) {
      unFlag = 0;
      for (let i = 1; i < this.length; i++) {
        if (String(this[i - 1]) > String(this[i])) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          unFlag = 1;
        }
      }
    }

    while (flag === 1) {
      flag = 0;
      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          flag = 1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
