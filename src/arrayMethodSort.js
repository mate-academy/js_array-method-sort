'use strict';

/**
 * Implement method Sort
 */
const compareDefault = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    for (let i = 1; i < this.length; i++) {
      for (let j = i; j > 0; j--) {
        const prev = this[j - 1];
        const current = this[j];

        if (compareFunction(prev, current) > 0) {
          this[j - 1] = current;
          this[j] = prev;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
