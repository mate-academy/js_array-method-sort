'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const n = this.length;

    const compare = function (a, b) {
      if (typeof compareFunction === 'function') {
        return compareFunction(a, b);
      } else if (String(a) < String(b)) {
        return -1;
      } else if (String(a) > String(b)) {
        return 1;
      } else {
        return 0;
      }
    };

    for (let i = 0; i < n - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < n; j++) {
        if (compare(this[j], this[minIndex]) < 0) {
          minIndex = j;
        }
      }

      const temp = this[i];

      this[i] = this[minIndex];
      this[minIndex] = temp;
    }

    return this;
  };
}

module.exports = applyCustomSort;
