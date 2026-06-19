'use strict';

/**
 * Implement method Sort
 */

const defaultCompareFunction = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    let isSwapped = true;

    while (isSwapped) {
      isSwapped = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i], this[i - 1]] = [this[i - 1], this[i]];
          isSwapped = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
