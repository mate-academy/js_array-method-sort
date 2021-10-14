'use strict';

/**
 * Implement method Sort
 */

function compareAsStrings(a, b) {
  const [stringA, stringB] = [`${a}`, `${b}`];

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
    let isSorted = false;

    do {
      isSorted = true;

      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          isSorted = false;
        }
      }
    } while (!isSorted);

    return this;
  };
}

module.exports = applyCustomSort;
