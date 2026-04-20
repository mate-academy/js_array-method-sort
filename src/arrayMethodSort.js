'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const isCompareFunction = compareFunction !== undefined
      && compareFunction !== null
      && typeof compareFunction === 'function';
    const length = this.length - 1;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        const isSwap = isCompareFunction
          ? compareFunction(this[j], this[j + 1]) > 0
          : this[j].toString() > this[j + 1].toString();

        if (isSwap) {
          const biggest = this[j];

          this[j] = this[j + 1];
          this[j + 1] = biggest;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
