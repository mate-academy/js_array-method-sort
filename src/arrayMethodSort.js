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
    return String(itemOne) > String(itemTwo) ? 1 : -1;
  };
}

module.exports = applyCustomSort;
