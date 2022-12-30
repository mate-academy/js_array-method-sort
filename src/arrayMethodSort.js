'use strict';

/**
 * Implement method Sort
 */
const compareFunctionAddition = (a, b) => {
  const strA = a.toString();
  const strB = b.toString();

  if (strA > strB) {
    return 1;
  }

  if (strA === strB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionAddition) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i] = a;
          this[i - 1] = b;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
