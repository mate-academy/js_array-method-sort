'use strict';

/**
 * Implement method Sort
 */
const compareFunction = function(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  return stringA > stringB ? 1 : stringA === stringB ? 0 : -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (callback(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
