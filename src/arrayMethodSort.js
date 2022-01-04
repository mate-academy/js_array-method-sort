'use strict';

/**
 * Implement method Sort
 */
const toStr = (a, b) => {
  const strA = a.toString();
  const strB = b.toString();

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = toStr) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const next = this[i];

        if (compareFunction(prev, next) > 0) {
          count++;
          this[i] = prev;
          this[i - 1] = next;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
