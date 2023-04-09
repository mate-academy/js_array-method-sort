'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction
          ? compareFunction(this[j], this[minIndex]) < 0
          : `${this[j]}` < `${this[minIndex]}`) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        const temp = this[i];

        this[i] = this[minIndex];
        this[minIndex] = temp;
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
