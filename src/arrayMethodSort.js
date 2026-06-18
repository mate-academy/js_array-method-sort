'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        const a = this[j];
        const b = this[j + 1];

        if (!compareFunction) {
          if (String(a) > String(b)) {
            const temp = a;

            this[j] = b;
            this[j + 1] = temp;
          }
        } else {
          if (compareFunction(a, b) > 0) {
            const temp = a;

            this[j] = b;
            this[j + 1] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
