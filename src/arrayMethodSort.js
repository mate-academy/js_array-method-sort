'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = function(a, b) {
    const StringA = '' + a;
    const StringB = '' + b;

    if (StringA > StringB) {
      return 1;
    } else if (StringA === StringB) {
      return 0;
    } else {
      return -1;
    }
  }) {
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
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
