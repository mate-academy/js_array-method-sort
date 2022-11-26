'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompare = (can1, can2) => {
    const str1 = String(can1);
    const str2 = String(can2);

    if (str1 > str2) {
      return 1;
    }

    if (str1 < str2) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;
    let prev;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        prev = this[i - 1];

        if (compareFunction(this[i], prev) < 0) {
          this[i - 1] = this[i];
          this[i] = prev;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
