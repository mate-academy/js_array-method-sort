'use strict';

/**
 * Implement method Sort
 */

function compareAsString(a, b) {
  // linter didn't allow me to use the variables a and b here
  const aNum = String(a);
  const bNum = String(b);

  if (aNum > bNum) {
    return 1;
  }

  if (aNum < bNum) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) {
          swapped = true;
          this[i] = b;
          this[i + 1] = a;
        }
      }
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
