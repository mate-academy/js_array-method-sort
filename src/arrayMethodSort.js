'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let temp = 0;
    let flag = true;

    while (flag) {
      flag = false;

      if (compareFunction === undefined) {
        for (let i = 0; i < this.length - 1; i++) {
          if (this[i] + '' > this[i + 1] + '') {
            temp = this[i];
            this[i] = this[i + 1];
            this[i + 1] = temp;
            flag = true;
          }
        }
      } else {
        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            temp = this[i];
            this[i] = this[i + 1];
            this[i + 1] = temp;
            flag = true;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
