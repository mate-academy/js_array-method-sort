'use strict';

/**
 * Implement method Sort
 */
function compare(A, B) {
  const a = '' + A;
  const b = '' + B;

  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
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
