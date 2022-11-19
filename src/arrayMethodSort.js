'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let amountOfChanges = 0;

    for (let i = 1; i < this.length; i++) {
      const previous = this[i - 1];
      const current = this[i];

      if (compareFunction(previous, current) > 0) {
        amountOfChanges++;

        this[i - 1] = current;
        this[i] = previous;
      }
    }

    if (amountOfChanges) {
      this.sort2(compareFunction);
    }

    return this;
  };
}

function compareAsString(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  }

  if (strA === strB) {
    return 0;
  }

  return -1;
}

module.exports = applyCustomSort;
