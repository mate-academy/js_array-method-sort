'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const count = this.length;

    if (typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => {
        const stringA = String(a);
        const stringB = String(b);

        if (stringA > stringB) {
          return 1;
        }

        if (stringA < stringB) {
          return -1;
        }

        return 0;
      };
    }

    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
