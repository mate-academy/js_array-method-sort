'use strict';

/**
 * Implement method Sort
 */

const basicComparison = (a, b) => {
  const elemFirst = String(a);
  const elemSecond = String(b);

  if (elemFirst > elemSecond) {
    return 1;
  } else if (elemFirst === elemSecond) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = basicComparison) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          counter++;
          this[i - 1] = second;
          this[i] = first;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
