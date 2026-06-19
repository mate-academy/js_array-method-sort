'use strict';

/**
 * Implement method Sort
 */
function asString(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  }

  return -1;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = asString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const pre = this[i - 1];
        const current = this[i];

        if (compareFunction(pre, current) > 0) {
          this[i] = pre;
          this[i - 1] = current;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
