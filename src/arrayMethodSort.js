'use strict';

/**
 * Implement method Sort
 */

const compareStr = (a, b) =>
  (`${a}` === `${b}`) ? 0 : ((`${a}` > `${b}`) ? 1 : -1);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStr) {
    let condition = true;

    do {
      condition = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          condition = true;
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    } while (condition);

    return this;
  };
}

module.exports = applyCustomSort;
