'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (!compareFunction) {
          if (String(this[j]) < String(this[minIndex])) {
            minIndex = j;
          }
        } else if (compareFunction(this[j], this[minIndex]) < 0) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        let temp = this[i];

        this[i] = this[minIndex];
        this[minIndex] = temp;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

// String(this[j]) < String(min) &&
