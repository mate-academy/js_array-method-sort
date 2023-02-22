'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareElement = (a, b) => {
    if (a.toString() > b.toString()) {
      return 1;
    }

    if (a.toString() < b.toString()) {
      return -1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareElement) {
    let counter = 0;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
