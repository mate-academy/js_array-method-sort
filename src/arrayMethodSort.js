'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let swapped = false;

      for (let j = 0; j < this.length - i - 1; j++) {
        const a = this[j].toString();
        const b = this[j + 1].toString();

        if (compareFunction) {
          if (compareFunction(a, b) > 0) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
            swapped = true;
          }
        } else {
          if (a > b) {
            const temp = this[j];

            this[j] = this[j + 1];
            this[j + 1] = temp;
            swapped = true;
          }
        }
      }

      if (!swapped) {
        break;
      };
    }

    return this;
  };
}

module.exports = applyCustomSort;
