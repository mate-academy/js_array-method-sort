'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asString) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstValue = this[i - 1];
        const secondValue = this[i];

        if (compareFunction(firstValue, secondValue) > 0) {
          count++;
          this[i] = firstValue;
          this[i - 1] = secondValue;
        }
      }
    } while (count > 0);

    return this;
  };
}

const asString = (str1, str2) => {
  const stringOne = String(str1);
  const stringTwo = String(str2);

  if (stringOne > stringTwo) {
    return 1;
  } else if (stringOne === stringTwo) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
