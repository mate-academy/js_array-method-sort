'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previos = this[i - 1];
        const current = this[i];

        if (compareFunction(previos, current) > 0) {
          this[i - 1] = current;
          this[i] = previos;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const compareAsString = (firstValue, secondValue) => {
  if (`${firstValue}` > `${secondValue}`) {
    return 1;
  }

  if (`${firstValue}` < `${secondValue}`) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
