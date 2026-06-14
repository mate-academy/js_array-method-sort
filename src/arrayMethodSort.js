'use strict';

/**
 * Implement method Sort
 */

function convertToString(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA < stringB) {
    return -1;
  }

  if (stringA > stringB) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = convertToString) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const save = this[i];

          this[i] = this[j];
          this[j] = save;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
