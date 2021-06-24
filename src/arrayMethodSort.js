'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    for (let i = 1; i < this.length; i++) {
      const key = this[i];
      let j = i - 1;

      while (j >= 0 && compareFunction(key, this[j]) < 0) {
        this[j + 1] = this[j];
        j--;
      }

      this[j + 1] = key;
    }

    return this;
  };
}

function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  if (stringA < stringB) {
    return -1;
  }
}

module.exports = applyCustomSort;
