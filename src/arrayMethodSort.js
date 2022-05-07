'use strict';

/**
 * Implement method Sort
 */
const asString = (a, b) => {
  const strictA = String(a);
  const strictB = String(b);

  if (strictA > strictB) {
    return 1;
  } else if (strictA === strictB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousValue = this[i - 1];
        const currenValue = this[i];

        if (compareFunction(previousValue, currenValue) > 0) {
          this[i - 1] = currenValue;
          this[i] = previousValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
