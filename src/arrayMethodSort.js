'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let sortFunction = compareFunction;
    const defaultComparator = (a, b) => {
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

    if (sortFunction === undefined) {
      sortFunction = defaultComparator;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const result = sortFunction(this[j], this[j + 1]);

        if (result > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
