'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const compare =
      typeof compareFunction === 'function'
        ? compareFunction
        : (a, b) => (String(a) > String(b) ? 1 : -1);

    for (let i = 0; i < this.length; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (compare(this[j], this[minIndex]) < 0) {
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
