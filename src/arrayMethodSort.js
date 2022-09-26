'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const prevValue = this[i - 1];

        if (compareFunction(prevValue, currentValue) > 0) {
          this[i - 1] = currentValue;
          this[i] = prevValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const compareString = (prevValue, currentValue) => {
  const strPrev = prevValue + '';
  const strCurrent = currentValue + '';

  if (strPrev > strCurrent) {
    return 1;
  } else if (strPrev < strCurrent) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
