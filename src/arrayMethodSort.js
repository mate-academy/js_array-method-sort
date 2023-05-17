'use strict';

/**
 * Implement method Sort
 */

const defailtCompare = (a, b) => {
  const firstElem = String(a).toLowerCase();
  const secondElem = String(b).toLowerCase();

  if (firstElem > secondElem) {
    return 1;
  } else if (firstElem < secondElem) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defailtCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = current;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
