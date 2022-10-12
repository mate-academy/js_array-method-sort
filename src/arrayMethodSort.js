'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const prev = this[i];
        const curr = this[j];

        if (compareFunction(prev, curr) > 0) {
          this[i] = curr;
          this[j] = prev;
        }
      }
    }

    return this;
  };
}

const compareAsString = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
