'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compare) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          const tmp = this[i];

          this[i] = this[j];
          this[j] = tmp;
        }
      }
    }

    return this;
  };
}

const compare = function(a, b) {
  const stringA = a.toString();
  const stringB = b.toString();

  if (stringA < stringB) {
    return -1;
  }

  if (stringA > stringB) {
    return 1;
  }

  return 0;
};

module.exports = applyCustomSort;
