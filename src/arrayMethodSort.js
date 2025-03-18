'use strict';

/**
 * Implement method Sort
 */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (this == null) {
      throw new TypeError('Cannot read property "sort2" of null or undefined');
    }

    if (this.length === 0) {
      return this;
    }

    let costomCompareFunction = compareFunction;

    if (typeof costomCompareFunction !== 'function') {
      costomCompareFunction = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        if (aStr < bStr) {
          return -1;
        }

        if (aStr > bStr) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - 1 - i; k++) {
        if (costomCompareFunction(this[k], this[k + 1]) > 0) {
          [this[k], this[k + 1]] = [this[k + 1], this[k]];
        }
      }
    }

    return this;
  };
}

applyCustomSort();

module.exports = applyCustomSort;
