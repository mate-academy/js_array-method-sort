'use strict';

/**
 * Implement method Sort
 */
const compareAsStrings = function(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA === stringB) {
    return 0;
  }

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let countt = 0;

    do {
      countt = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          countt++;
          this[i] = current;
          this[i + 1] = prev;
        }
      }
    } while (countt > 0);

    return this;
  };
}

module.exports = applyCustomSort;
