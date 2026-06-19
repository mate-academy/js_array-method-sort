'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const c = String(a);
  const d = String(b);

  if (c > d) {
    return 1;
  }

  if (c < d) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          counter++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
