'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current)) {
          this[i - 1] = current;
          this[i] = prev;
          count++;
        }
      };
    } while (count > 0);

    return this;
  };
}

const compareAsStrings = (a, b) => {
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

module.exports = applyCustomSort;
