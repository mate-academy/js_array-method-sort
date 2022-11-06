'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count, temp;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          count++;

          temp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = temp;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsString(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else if (strA === strB) {
    return 0;
  } else {
    return -1;
  }
}

module.exports = applyCustomSort;
