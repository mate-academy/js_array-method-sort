'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let actualCompareFunction = compareFunction;

    if (typeof compareFunction !== 'function') {
      actualCompareFunction = (a, b) =>
        a.toString() > b.toString() ? 1 : a.toString() < b.toString() ? -1 : 0;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const resultOfCallback = actualCompareFunction(this[i], this[j]);

        if (resultOfCallback > 0) {
          const temp = this[j];

          this[j] = this[i];
          this[i] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
