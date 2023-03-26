'use strict';

/**
 * Implement method Sort
 */
const functionCompare = (a, b) => {
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
  [].__proto__.sort2 = function(callback = functionCompare) {
    let count = false;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (callback(prev, current) > 0) {
          count = true;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count);

    return this;
  };
}

module.exports = applyCustomSort;
