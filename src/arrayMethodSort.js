'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction =
  (a, b) => a.toString() > b.toString()) {
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

module.exports = applyCustomSort;
