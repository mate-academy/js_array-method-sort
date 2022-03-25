'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(
    callback = (a, b) => String(a) > String(b)
  ) {
    let sorted;

    do {
      sorted = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (callback(this[i], this[i + 1]) > 0) {
          const temp = this[i + 1];

          this[i + 1] = this[i];
          this[i] = temp;
          sorted = true;
        }
      }
    } while (sorted);

    return this;
  };
}

module.exports = applyCustomSort;
