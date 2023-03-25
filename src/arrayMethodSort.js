'use strict';

/**
 * Implement method Sort
 */
const compareByDefault = (firstValue, secondValue) => {
  const stringFirstValue = String(firstValue);
  const stringSecondValue = String(secondValue);

  if (stringFirstValue > stringSecondValue) {
    return 1;
  }

  if (stringFirstValue === stringSecondValue) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareByDefault) {
    let sortCount;

    do {
      sortCount = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          sortCount++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (sortCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
