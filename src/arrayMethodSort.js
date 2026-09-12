'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
      const first = String(a);
      const second = String(b);

      if (first > second) {
        return 1;
      }

      if (first < second) {
        return -1;
      }

      return 0;
    };

    const compare = compareFunction ?? defaultCompare;

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const comparisonResult = compare(this[i], this[j]);

        if (comparisonResult > 0) {
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
