'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    for (let i = 0; i < this.length - 1; i++) {
      let count = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction
          ? compareFunction(this[j], this[count]) < 0
          : `${this[j]}` < `${this[count]}`) {
          count = j;
        }
      }

      if (count !== i) {
        const index = this[i];

        this[i] = this[count];
        this[count] = index;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
