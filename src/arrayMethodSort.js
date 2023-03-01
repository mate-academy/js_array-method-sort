'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareFunction(a, b) {
    if (String(a) > String(b)) {
      return 1;
    } else if (String(a) === String(b)) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function (callback = compareFunction) {
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
