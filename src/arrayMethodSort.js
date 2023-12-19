'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  defaultCompare) {
    const arrLength = this.length;
    let counter = 0;

    while (counter < arrLength - 1) {
      for (let i = 0; i < arrLength - counter - 1; i++) {
        const firstItem = this[i].toString();
        const secondItem = this[i + 1].toString();

        const compareResult = compareFunction(firstItem, secondItem);

        if (compareResult > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }

      counter++;
    }

    return this;
  };
}

function defaultCompare(a, b) {
  return a.toString() > b.toString();
};

module.exports = applyCustomSort;
