'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFunction = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA === strB) {
      return 0;
    }

    if (strA > strB) {
      return 1;
    }

    if (strA < strB) {
      return -1;
    }
  };

  [].__proto__.sort2 = function (compareFunction = defaultCompareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const compareResult = compareFunction(this[j], this[j + 1]);

        if (compareResult > 0) {
          const biggerValue = this[j];

          this[j] = this[j + 1];
          this[j + 1] = biggerValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
