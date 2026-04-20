'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let compareFunctionData = compareFunction;

    if (typeof compareFunctionData !== 'function') {
      compareFunctionData = (a, b) => {
        const aStr = String(a);
        const bStr = String(b);

        const aIsUpper = aStr[0] !== aStr[0].toLowerCase();
        const bIsUpper = bStr[0] !== bStr[0].toLowerCase();

        if (aIsUpper && !bIsUpper) {
          return -1;
        }

        if (!aIsUpper && bIsUpper) {
          return 1;
        }

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
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunctionData(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
