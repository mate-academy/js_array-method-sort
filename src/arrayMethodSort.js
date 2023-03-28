'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(callback = sortWithoutParams) {
    for (let i = 1; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        const current = this[i];
        const prev = this[j];

        if (callback(prev, current) > 0) {
          this[i] = prev;
          this[j] = current;
        }
      }
    }

    return this;
  };
}

function sortWithoutParams(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA < strB) {
    return -1;
  };

  if (strA > strB) {
    return 1;
  };

  return 0;
}

module.exports = applyCustomSort;
