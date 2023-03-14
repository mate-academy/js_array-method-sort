'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let swapped = true;
    let i = 0;

    while (swapped) {
      swapped = false;

      for (let j = 1; j < this.length - i; j++) {
        const previous = this[j - 1];
        const next = this[j];

        if ((!compareFunction && previous.toString() > next.toString())
          || (compareFunction && compareFunction(previous, next) > 0)) {
          this[j] = previous;
          this[j - 1] = next;
          swapped = true;
        }
      }
      i++;
    }

    return this;
  };
}

module.exports = applyCustomSort;
