'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compare = (a, b) => String(a) > String(b);

  [].__proto__.sort2 = function(compareFunction = compare) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
