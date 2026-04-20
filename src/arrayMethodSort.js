'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let actualCompareFunction = compareFunction;

    if (typeof actualCompareFunction !== 'function') {
      actualCompareFunction = (a, b) => {
        if (a < b) {
          return -1;
        }

        if (a > b) {
          return 1;
        }

        return 0;
      };
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let k = 0; k < this.length - 1; k++) {
        if (actualCompareFunction(this[k].toString(),
          this[k + 1].toString()) > 0) {
          const temp = this[k];

          this[k] = this[k + 1];
          this[k + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
