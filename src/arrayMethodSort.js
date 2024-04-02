'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length; j++) {
        let compareResult = String(this[i]) < String(this[j]);

        if (compareFunction) {
          compareResult = compareFunction(this[i], this[j]);
        }

        if (
          (compareResult && compareFunction === undefined) ||
          (compareFunction && compareResult <= 0)
        ) {
          const temp = this[i];

          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
