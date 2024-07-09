'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultComparator) {
    // just a bubble sort with some optimizations
    let swapped;

    for (let rightLimit = this.length - 1; rightLimit > 0; rightLimit--) {
      swapped = false;

      for (let i = 0; i < rightLimit; i++) {
        const cmpResult = compareFunction(this[i], this[i + 1]);

        if (cmpResult > 0) {
          const tmp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tmp;

          swapped = true;
        }
      }

      if (!swapped) {
        break;
      }
    }

    return this;
  };
}

function defaultComparator(a, b) {
  const aStr = String(a);
  const bStr = String(b);

  if (aStr < bStr) {
    return -1;
  }

  if (aStr > bStr) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
