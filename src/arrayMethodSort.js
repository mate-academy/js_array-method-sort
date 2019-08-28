'use strict';

/**
 * Implement method Sort
 */
const unicodeSort = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  for (let i = 0; i < strA.length; i++) {
    if (!strB[i] || strA[i] > strB[i]) {
      return 1;
    } else if (strA[i] < strB[i]) {
      return -1;
    }
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const testFunction = compareFunction === undefined
      ? unicodeSort
      : compareFunction;

    for (let j = 0; j < this.length - 1; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if (testFunction(this[i], this[i + 1]) > 0) {
          const buffer = this[i];
          this[i] = this[i + 1];
          this[i + 1] = buffer;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
