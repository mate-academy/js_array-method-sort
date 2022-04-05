'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    let tmp;

    for (let j = 0; j < this.length; j++) {
      for (let i = 1; i < this.length; i++) {
        if (`${this[i - 1]}` > `${this[i]}` && !compareFunction) {
          tmp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = tmp;
        }

        if (compareFunction && compareFunction(this[i - 1], this[i]) > 0) {
          tmp = this[i - 1];
          this[i - 1] = this[i];
          this[i] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
