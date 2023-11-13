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
      for (let j = 0; j < this.length - i - 1; j++) {
        if (actualCompareFunction(this[j].toString(),
          this[j + 1].toString()) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
