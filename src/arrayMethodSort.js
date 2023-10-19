'use strict';

/**
 * Implement method Sort
 */
const sortAsString = function(strA, strB) {
  if (String(strA) > String(strB)) {
    return 1;
  } else if (String(strA) < String(strB)) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = sortAsString) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
