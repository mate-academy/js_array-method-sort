'use strict';

/**
 * Implement method Sort
 */
function stringSort(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(callback = stringSort) {
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (callback(current, next) > 0) {
          this[i] = next;
          this[i + 1] = current;
          counter++;
        }
      }
    } while (counter !== 0);

    return this;
  };
}

module.exports = applyCustomSort;
