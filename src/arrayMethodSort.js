'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count = 0;
    let tmp = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          tmp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = tmp;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function defaultCompare(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA < stringB) {
    return -1;
  }

  if (stringA > stringB) {
    return 1;
  }

  return 0;
}

module.exports = applyCustomSort;
