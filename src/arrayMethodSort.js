'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[j]) > 0) {
            const item = this[i];

            this[i] = this[j];
            this[j] = item;
          }
        } else {
          if (`${this[i]}` > `${this[j]}`) {
            const item = this[i];

            this[i] = this[j];
            this[j] = item;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
