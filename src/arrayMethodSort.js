'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let compare = compareFunction;

    if (!compareFunction) {
      compare = function(a, b) {
        if (('' + a) > ('' + b)) {
          return 1;
        } else if (('' + a) === ('' + b)) {
          return 0;
        } else {
          return -1;
        }
      };
    }

    let previousValue;
    let currentValue;
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        currentValue = this[i];
        previousValue = this[i - 1];

        if (compare(previousValue, currentValue) > 0) {
          this[i] = previousValue;
          this[i - 1] = currentValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
