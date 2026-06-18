'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction === undefined) {
          if (String(this[i]) > String(this[j])) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        } else {
          const result = compareFunction(this[i], this[j]);

          if (result > 0) {
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
