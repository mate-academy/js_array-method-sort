'use strict';

/**
 * Implement method Sort
 */

function compareValues(a, b) {
  const aString = String(a);
  const bString = String(b);

  if (aString < bString) {
    return -1;
  }

  if (aString > bString) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareValues) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
