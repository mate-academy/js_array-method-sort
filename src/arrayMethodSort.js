'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (a, b) => a.toString() > b.toString();

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let flag;

    do {
      flag = true;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          flag = false;
        }
      }
    } while (!flag);

    return this;
  };
}

module.exports = applyCustomSort;
