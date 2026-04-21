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

        return 0;
      });

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (call(this[j], this[j + 1]) > 0) {
          const valueKeeper = this[j];

          this[j] = this[j + 1];
          this[j + 1] = valueKeeper;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
