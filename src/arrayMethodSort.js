'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = '') {
    const length = this.length;

    for (let index = 0; index < length; index++) {
      for (let j = 0; j < length - index - 1; j++) {
        if (typeof compareFunction === 'function') {
          const result = compareFunction(this[j], this[j + 1]);

          if (result > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        } else {
          if (String(this[j]) > String(this[j + 1])) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

applyCustomSort();
module.exports = applyCustomSort;
