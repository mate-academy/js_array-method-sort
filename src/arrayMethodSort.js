'use strict';

/**
 * Implement method Sort
 */

const compareFunction = (a, b) => {
  const string1 = String(a);
  const string2 = String(b);

  if (string1 > string2) {
    return 1;
  } else if (string1 === string2) {
    return 0;
  } else {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
