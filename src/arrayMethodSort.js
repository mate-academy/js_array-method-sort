'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction) {
      let swapped = true;

      while (swapped === true) {
        swapped = false;

        for (let i = 0; i < this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
            swapped = true;
          }
        }
      }

      return this;
    } else {
      let swapped = true;

      while (swapped === true) {
        swapped = false;

        for (let i = 0; i < this.length - 1; i++) {
          if (String(this[i]) > String(this[i + 1])) {
            const temp = this[i];

            this[i] = this[i + 1];
            this[i + 1] = temp;
            swapped = true;
          }
        }
      }

      return this;
    }
  };
}
module.exports = applyCustomSort;
