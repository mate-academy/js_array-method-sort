'use strict';

/**
 * Implement method Sort
 */

function defaultCompareFunction(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  } else if (strA > strB) {
    return 1;
  } else {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const betterCompareFunction =
      typeof compareFunction === 'function'
        ? compareFunction
        : defaultCompareFunction;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (betterCompareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
