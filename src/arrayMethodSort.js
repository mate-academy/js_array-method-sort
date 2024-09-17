'use strict';

/**
 * Implement method Sort
 */
function compareStrings(a, b) {
  const A = '' + a;
  const B = '' + b;

  if (A < B) {
    return -1;
  }

  if (A > B) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i];

          this[i] = this[i - 1];
          this[i - 1] = temp;
          sorted = false;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
