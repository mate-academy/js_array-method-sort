'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const len = this.length;

    const compare =
      compareFunction ||
      ((a, b) => {
        const stringA = String(a);
        const stringB = String(b);

        if (stringA < stringB) {
          return -1;
        }

        if (stringA > stringB) {
          return 1;
        }

        return 0;
      });

    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
