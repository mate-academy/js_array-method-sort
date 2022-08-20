'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = callback) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

const callback = (a, b) => {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA > stringB) {
    return 1;
  } else if (stringA === stringB) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
