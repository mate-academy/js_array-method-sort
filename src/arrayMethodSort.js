/* eslint-disable no-console */
'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let copyCompareFunction;

    if (arguments.length === 0) {
      copyCompareFunction = (a, b) => {
        if (a.toString() < b.toString()) {
          return -1;
        }

        if (a.toString() > b.toString()) {
          return 1;
        }

        return 0;
      };
    } else {
      copyCompareFunction = compareFunction;
    }

    let isSwitched = true;

    while (isSwitched) {
      isSwitched = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (copyCompareFunction(this[i], this[i + 1]) >= 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          isSwitched = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
