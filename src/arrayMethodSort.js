'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort(callback) {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultComparator = (a, b) => {
      const aStr = String(a);
      const bStr = String(b);

      if (aStr < bStr) {
        return -1;
      }

      if (aStr > bStr) {
        return 1;
      }

      return 0;
    };

    const comparator = compareFunction || defaultComparator;

    for (let i = 0; i < this.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (comparator(this[j], this[minIndex]) < 0) {
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
