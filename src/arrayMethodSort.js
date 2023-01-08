'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareStrings = (a, b) => {
    const first = String(a);
    const second = String(b);

    if (first > second) {
      return 1;
    } else if (first < second) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(callback = compareStrings) {
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
};

module.exports = applyCustomSort;
