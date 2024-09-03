'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let defaultCompareFunction;

    if (typeof compareFunction !== 'function') {
      defaultCompareFunction = function (a, b) {
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
    } else {
      defaultCompareFunction = compareFunction;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (defaultCompareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }

      if (i > 0 && defaultCompareFunction(this[i], this[i - 1]) === 0) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
