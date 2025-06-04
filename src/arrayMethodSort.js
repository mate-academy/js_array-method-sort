'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const len = this.length;

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        let compareResult;

        if (typeof compareFunction === 'function') {
          compareResult = compareFunction(this[j], this[j + 1]);
        } else {
          if (String(this[j]) > String(this[j + 1])) {
            compareResult = 1;
          } else {
            compareResult = -1;
          }
        }

        if (compareResult > 0) {
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
