'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = callback) {
    // write code here
    if (this.length <= 1) {
      return this;
    }

    for (let i = 1; i < this.length; i++) {
      for (let j = i - 1; j > -1; j--) {
        if (compareFunction(this[j + 1], this[j]) < 0) {
          [this[j + 1], this[j]] = [this[j], this[j + 1]];
        }
      }
    }

    return this;
  };

  function callback(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA === stringB) {
      return 0;
    }

    return stringA > stringB ? 1 : -1;
  }
}

module.exports = applyCustomSort;
