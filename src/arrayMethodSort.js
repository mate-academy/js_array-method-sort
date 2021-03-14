'use strict';

const defaultCompareFunction = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  } else if (strA > strB) {
    return 1;
  }

  return 0;
};

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const compFunc = !compareFunction
      ? defaultCompareFunction
      : compareFunction;

    let isSorted = false;

    do {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compFunc(a, b) >= 0) {
          isSorted = false;

          const tmp = a;

          this[i - 1] = b;
          this[i] = tmp;
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
