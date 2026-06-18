'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compareResult = compareFunction;

    if (typeof compareResult !== 'function') {
      compareResult = (a, b) => {
        const aStr = a.toString();
        const bStr = b.toString();

        return aStr > bStr ? 1 : -1;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareResult(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
