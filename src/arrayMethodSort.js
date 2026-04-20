'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        let condition;

        if (typeof compareFunction === 'function') {
          condition = compareFunction(this[j], this[j + 1]);
        } else {
          condition = String(this[j]) > String(this[j + 1]) ? 1 : -1;
        }

        if (condition > 0) {
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
