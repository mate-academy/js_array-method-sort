'use strict';

/**
 * Implement method Sort
 */

const compareStrings = (a, b) => {
  const StringA = String(a);
  const StringB = String(b);

  if (StringA > StringB) {
    return 1;
  } else if (StringA === StringB) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const prev = this[i - 1];

        if (compareFunction(prev, current) > 0) {
          this[i] = current;
          this[i - 1] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
