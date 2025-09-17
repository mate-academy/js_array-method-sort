'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this.length < 2) {
      return this;
    }

    const length = this.length;

    const compare =
      compareFunction ||
      function (a, b) {
        const stringA = String(a);
        const stringB = String(b);

        if (stringA < stringB) {
          return -1;
        }

        if (stringA > stringB) {
          return 1;
        }

        return 0;
      };
    let sorted = true;

    do {
      sorted = true;

      for (let i = 0; i < length - 1; i++) {
        if (compare(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          sorted = false;
        }
      }
    } while (!sorted);

    return this;
  };
}

module.exports = applyCustomSort;
