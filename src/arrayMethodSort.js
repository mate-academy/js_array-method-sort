'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const callback = compareFunction
      || ((a, b) => a.toString() > b.toString() ? 1 : -1);
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const cur = this[i];

        if (callback(prev, cur) > 0) {
          this[i - 1] = cur;
          this[i] = prev;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
