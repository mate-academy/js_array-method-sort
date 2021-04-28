'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];
        const solution = compareFunction
          ? compareFunction(prev, current) > 0
          : prev.toString() > current.toString();

        if (solution) {
          this[i - 1] = current;
          this[i] = prev;
          counter++;
        }
      }
    } while (counter !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
