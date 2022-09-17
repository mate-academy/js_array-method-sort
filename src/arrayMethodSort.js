'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = compareFunction) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const buffer = this[i];

          this[i] = this[i + 1];
          this[i + 1] = buffer;
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
