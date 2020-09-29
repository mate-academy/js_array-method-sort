'use strict';

/**
 * Implement method Sort
 */
function compareString(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA === stringB) {
    return 0;
  }

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previous = this[i - 1];
        const current = this[i];

        if (compareFunction(previous, current) > 0) {
          this[i - 1] = current;
          this[i] = previous;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
