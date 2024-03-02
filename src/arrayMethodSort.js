'use strict';

/**
 * Implement method Sort
 */
function standartCompare(first, second) {
  const firstString = first.toString();
  const secondString = second.toString();

  if (firstString > secondString) {
    return 1;
  }

  if (firstString < secondString) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = standartCompare) {
    for (let iteration = 0; iteration < this.length; iteration++) {
      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];
        const compare = compareFunction(first, second);

        if (compare >= 1) {
          this[i - 1] = second;
          this[i] = first;

          continue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
