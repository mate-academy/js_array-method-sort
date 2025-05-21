'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (callback) {
    const call =
      callback ||
      ((a, b) => {
        const stringA = String(a);
        const stringB = String(b);

        if (stringA > stringB) {
          return 1;
        }

        if (stringA < stringB) {
          return -1;
        }

        if (stringA === stringB) {
          return 0;
        }
      });

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (call(this[j], this[j + 1]) > 0) {
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
