'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let isSorted;

    do {
      isSorted = true;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          isSorted = false;

          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;
        }
      }
    } while (!isSorted);

    return this;
  };
}

function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
