'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    return String(a) > String(b);
  }) {
    let callAgain = true;

    while (callAgain) {
      callAgain = false;

      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
          callAgain = true;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
