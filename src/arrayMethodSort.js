'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    // write code here
    let isSorting;

    do {
      isSorting = false;

      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compareFunction(a, b) > 0) {
          this[i] = b;
          this[i + 1] = a;
          isSorting = true;
        }
      }
    } while (isSorting === true);

    return this;
  };
}

function compareStrings(a, b) {
  const first = String(a);
  const second = String(b);

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
