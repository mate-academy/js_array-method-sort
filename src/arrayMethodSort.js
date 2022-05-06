'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort(a, b) {
  const c = String(a);
  const d = String(b);

  if (c > d) {
    return 1;
  }

  if (c < d) {
    return -1;
  }

  return 0;
}

[].__proto__.sort2 = function(callback = applyCustomSort) {
  let count;

  do {
    count = 0;

    for (let i = 1; i < this.length; i++) {
      const prev = this[i - 1];
      const current = this[i];

      if (callback(prev, current) > 0) {
        count++;
        this[i - 1] = current;
        this[i] = prev;
      }
    }
  } while (count > 0);

  return this;
};

module.exports = applyCustomSort;
