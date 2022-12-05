'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    for (let i = 1; i < this.length; i++) {
      const prev = this[i - 1];
      const current = this[i];

      if (compareFunction(prev, current) > 0) {
        this[i - 1] = current;
        this[i] = prev;
        i = 0;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
