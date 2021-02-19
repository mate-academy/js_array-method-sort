'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // sorted if no sorting function is provided, by default.
    if (arguments[0] === undefined) {
      let minIdx;

      for (let i = 0; i < this.length; i++) {
        minIdx = i;

        for (let j = i + 1; j < this.length; j++) {
          if ((this[j]).toString() < (this[minIdx]).toString()) {
            minIdx = j;
          }
        }
        [this[i], this[minIdx]] = [this[minIdx], this[i]];
      }

      return this;
    }
    // sorting with callback.
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
