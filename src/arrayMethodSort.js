'use strict';

/**
 * Implement method Sort
 */
function compareAsString(a, b) {
  const aAsString = String(a);
  const bAsString = String(b);

  if (aAsString > bAsString) {
    return 1;
  }

  if (aAsString < bAsString) {
    return -1;
  }

  if (aAsString === bAsString) {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareAsString) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          this[i] = prev;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
