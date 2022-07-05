'use strict';

const compareAsStrings = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  return stringA > stringB ? 1 : stringA === stringB ? 0 : -1;
};

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
