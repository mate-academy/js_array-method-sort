'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = defaultComparator) {
    if (typeof compareFunction !== 'function') {
      throw new Error('Comparator must be a function');
    }

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
  if (a === undefined && b === undefined) {
    return 0;
  }

  if (a === undefined) {
    return 1;
  }

  if (b === undefined) {
    return -1;
  }

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
