'use strict';

/**
 * Implement method Sort
 */
function compareStr(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringB > stringA) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStr) {
    // write code here
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
