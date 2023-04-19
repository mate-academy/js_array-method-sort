'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareAsStrings(a, b) {
    const StringA = String(a);
    const StringB = String(b);

    if (StringA > StringB) {
      return 1;
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    }
    while (count);

    return this;
  };

module.exports = applyCustomSort;
