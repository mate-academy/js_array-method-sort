'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const previousString = String(a);
  const currentString = String(b);

  if (previousString > currentString) {
    return 1;
  }

  if (previousString < currentString) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    // write code here
    let isResume;

    do {
      isResume = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          isResume = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (isResume);

    return this;
  };
}

module.exports = applyCustomSort;
