'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let iteration = 0; iteration < this.length - 1; iteration++) {
      for (let i = 0; i < this.length - 1 - iteration; i++) {
        let compareResult;

        if (typeof compareFunction === 'function') {
          compareResult = compareFunction(this[i], this[i + 1]);
        } else {
          const CURRENT_VALUE = String(this[i]);
          const NEXT_VALUE = String(this[i + 1]);

          if (CURRENT_VALUE > NEXT_VALUE) {
            compareResult = 1;
          } else if (CURRENT_VALUE < NEXT_VALUE) {
            compareResult = -1;
          } else {
            compareResult = 0;
          }
        }

        if (compareResult > 0) {
          const TEMPORARY = this[i];

          this[i] = this[i + 1];
          this[i + 1] = TEMPORARY;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
