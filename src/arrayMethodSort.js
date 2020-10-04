'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
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
    } while (count > 0);

    return this;
  };

  function defaultFunction(firstValue, secondValue) {
    const stringFirstValue = String(firstValue);
    const stringSecondValue = String(secondValue);

    if (stringFirstValue > stringSecondValue) {
      return 1;
    } else if (stringFirstValue < stringSecondValue) {
      return -1;
    } else {
      return 0;
    }
  };
}

module.exports = applyCustomSort;
