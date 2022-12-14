'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count, prevValue;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          count++;

          prevValue = this[i - 1];
          this[i - 1] = this[i];
          this[i] = prevValue;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsString(a, b) {
  const strA = String(a);
  const strB = String(b);

  switch (true) {
    case (strA > strB):
      return 1;
    case (strA === strB):
      return 0;
    default:
      return -1;
  }
}

module.exports = applyCustomSort;
