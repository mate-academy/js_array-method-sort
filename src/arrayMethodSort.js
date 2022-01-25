'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortingFunction) {
    let counter = 0;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentValue = this[i];
        const nextValue = this[i + 1];

        if (compareFunction(currentValue, nextValue) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };

  const sortingFunction = (firstValue, secondValue) => {
    return firstValue.toString() > secondValue.toString() ? 1 : -1;
  };
}

module.exports = applyCustomSort;
