'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let counter = 1;

    while (counter) {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          counter++;
        }
      }
    }

    return this;
  };

  const compareAsStrings = (itemOne, itemTwo) => {
    const stringOne = String(itemOne);
    const stringTwo = String(itemTwo);

    if (stringOne === stringTwo) {
      return 0;
    }

    return stringOne > stringTwo ? 1 : -1;
  };
}

module.exports = applyCustomSort;
