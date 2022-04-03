'use strict';

/**
 * Implement method Sort
 */
function compareAsString(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const pre = this[i - 1];

          count++;

          this[i - 1] = this[i];
          this[i] = pre;
        }
      };
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
