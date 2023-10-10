'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i; j < this.length; j++) {
        let condition;

        if (compareFunction === undefined) {
          condition = this[i].toString() > this[j].toString();
        } else {
          condition = compareFunction(this[i], this[j]) > 0;
        }

        if (condition) {
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
