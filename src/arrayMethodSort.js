'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareFn) {
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

function compareFn(a, b) {
  const stringifyA = String(a);
  const stringifyB = String(b);

  if (stringifyA > stringifyB) {
    return 1;
  }

  if (stringifyA < stringifyB) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
