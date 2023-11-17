'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = undefined) {
    let compare = compareFunction;

    if (!compare) {
      compare = function(a, b) {
        const stringA = String(a);
        const stringB = String(b);

        if (stringA === stringB) {
          return 0;
        }

        return stringA < stringB ? -1 : 1;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
