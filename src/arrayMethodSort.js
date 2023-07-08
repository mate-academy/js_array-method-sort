'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    compareFunction = (a, b) => `${a}` > `${b}` ? 1 : -1
  ) {
    let flag;

    do {
      flag = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          flag = 1;
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    } while (flag === 1);

    return this;
  };
}

module.exports = applyCustomSort;
