'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let counter = 0;

    function compareStrings(a, b) {
      if (a.toString() > b.toString()) {
        return 1;
      } else if (a.toString() === b.toString()) {
        return 0;
      } else {
        return -1;
      }
    }

    const callback = (compareFunction === undefined)
      ? compareStrings
      : compareFunction;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        if (callback(this[i - 1], this[i]) > 0) {
          const buffer = this[i - 1];

          this[i - 1] = this[i];
          this[i] = buffer;
          counter++;
        }
      }
    } while (counter !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
