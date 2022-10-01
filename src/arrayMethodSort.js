'use strict';

/**
 * Implement method Sort
 */

function compareValue(a, b) {
  const valueA = String(a);
  const valueB = String(b);

  if (valueA > valueB) {
    return 1;
  };

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareValue) {
    let step;

    do {
      step = 0;

      for (let i = 1; i < this.length; i++) {
        const prevValue = this[i - 1];
        const nextValue = this[i];
        const resultCompare = compareFunction(prevValue, nextValue);

        if (resultCompare > 0) {
          this[i - 1] = nextValue;
          this[i] = prevValue;

          step++;
        };
      };
    } while (step > 0);

    return this;
  };
};

module.exports = applyCustomSort;
