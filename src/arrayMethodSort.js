'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultValues) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = previous;
        }
      }
    } while (count > 0);

    return this;
  };
}

function defaultValues(a, b) {
  const el1 = String(a);
  const el2 = String(b);

  if (el1 > el2) {
    return 1;
  }

  if (el1 < el2) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
