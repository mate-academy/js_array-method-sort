'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const actualCompareFunction = !compareFunction
      ? defaultCompareFunction
      : compareFunction;

    for (let i = 0; i < this.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (actualCompareFunction(this[j], this[minIndex]) < 0) {
          minIndex = j;
        }
      }

      const temp = this[i];

      this[i] = this[minIndex];
      this[minIndex] = temp;
    }

    return this;
  };
}

function defaultCompareFunction(a, b) {
  const aStr = String(a);
  const bStr = String(b);

  if (aStr < bStr) {
    return -1;
  }

  if (aStr > bStr) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
