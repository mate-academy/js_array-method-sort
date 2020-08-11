'use strict';

/**
 * Implement method Sort
 */

const stringsCompare = function(firstElem, secondElem) {
  const firstString = String(firstElem);
  const secondString = String(secondElem);

  if (firstString > secondString) {
    return 1;
  } else if (firstString < secondString) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringsCompare) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElem = this[i - 1];
        const secondElem = this[i];

        if (compareFunction(firstElem, secondElem) > 0) {
          this[i - 1] = secondElem;
          this[i] = firstElem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
