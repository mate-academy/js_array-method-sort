'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        let resultOfCompare = null;

        if (!compareFunction) {
          if (this[i].toString() > this[j].toString()) {
            resultOfCompare = 1;
          } else {
            resultOfCompare = -1;
          }
        } else {
          resultOfCompare = compareFunction(this[i], this[j]);
        }

        if (resultOfCompare > 0) {
          const value = this[i];

          this[i] = this[j];

          this[j] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
