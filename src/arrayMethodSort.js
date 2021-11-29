'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortAsDefault) {
    let result = 0;
    let first, next;
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        result = compareFunction(this[i - 1], this[i]);

        if (result > 0) {
          count++;
          next = this[i - 1];
          first = this[i];
          this[i - 1] = first;
          this[i] = next;
        }
      }
    } while (count > 0);

    return this;
  };
}

function sortAsDefault(a, b) {
  const prev = String(a);
  const current = String(b);

  if (prev > current) {
    return 1;
  }

  if (prev < current) {
    return -1;
  }

  return 0;
};
module.exports = applyCustomSort;
