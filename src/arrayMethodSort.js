'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareString = (itemA, itemB) => {
    const valueOne = itemA.toString();
    const valueTwo = itemB.toString();

    if (valueOne > valueTwo) {
      return 1;
    } else if (valueOne < valueTwo) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const currentValue = this[i];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          count++;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
