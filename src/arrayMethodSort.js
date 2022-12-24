'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstChek = this[i - 1];
        const secondChek = this[i];

        if (callback(firstChek, secondChek) > 0) {
          this[i - 1] = secondChek;
          this[i] = firstChek;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareFunction(a, b) {
  if (String(a) > String(b)) {
    return 1;
  }

  if (String(a) < String(b)) {
    return -1;
  }

  return 0;
}
module.exports = applyCustomSort;
