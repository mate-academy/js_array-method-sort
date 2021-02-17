'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const usedCompareFunction = !compareFunction
      ? ownFunction
      : compareFunction;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (usedCompareFunction(this[j], this[j + 1]) > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    function ownFunction(a, b) {
      const firstElem = a.toString();
      const secondElem = b.toString();

      if (firstElem > secondElem) {
        return 1;
      } else if (firstElem < secondElem) {
        return -1;
      } else {
        return 0;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
