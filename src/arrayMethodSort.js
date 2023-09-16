'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const resultCompared = arguments.length === 1
          ? compareFunction(this[j], this[j + 1])
          : String(this[j]) > (String(this[j + 1]));

        if (resultCompared > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
