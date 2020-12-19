'use strict';

/**
 * Implement method Sort
 */

const stringCompare = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA > stringB) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringCompare) {
    let change;
    let operationCount;

    do {
      operationCount = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          change = this[i];
          this[i] = this[i + 1];
          this[i + 1] = change;

          operationCount++;
        }
      }
    } while (operationCount > 0);

    return this;
  };
}

module.exports = applyCustomSort;
