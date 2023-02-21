'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let prev;
    let count;
    let compareFunctionByDefault;

    if (compareFunction) {
      compareFunctionByDefault = compareFunction;
    } else {
      compareFunctionByDefault = (curr, previous) => {
        if (previous.toString() > curr.toString()) {
          return -1;
        }

        if (previous.toString() > curr.toString()) {
          return 1;
        }

        return 0;
      };
    }

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunctionByDefault(this[i], (this[i - 1])) < 0) {
          count++;
          prev = this[i];
          this[i] = this[i - 1];
          this[i - 1] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
