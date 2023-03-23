'use strict';

/**
 * Implement method Sort
 */
const defaultCallback = (a, b) => {
  const strA = a + '';
  const strB = b + '';

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCallback) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          this[i - 1] = b;
          this[i] = a;
          count++;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
