'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let count = 0;

    const strCompare = (a, b) => {
      const stringA = String(a);
      const stringB = String(b);

      return stringA > stringB
        ? 1
        : stringA === stringB
          ? 0
          : -1;
    };

    const callBack = compareFunction === undefined
      ? strCompare
      : compareFunction;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        if (callBack(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
