/* eslint-disable no-param-reassign */
'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  function stringCompare(a, b) {
    a = String(a);
    b = String(b);

    if (a > b) {
      return 1;
    }

    if (a < b) {
      return -1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    let counting;

    do {
      counting = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const previouse = this[i - 1];

        if (compareFunction(previouse, current) > 0) {
          counting++;
          this[i - 1] = current;
          this[i] = previouse;
        }
      }
    } while (counting > 0);

    return this;
  };
}

module.exports = applyCustomSort;
