'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (a.toString() > b.toString()) {
        return 1;
      } else if (a.toString() < b.toString()) {
        return -1;
      } else {
        return 0;
      }
    },
  ) {
    let tempValue;

    for (let i = 0; i < this.length; i++) {
      for (let k = 0; k < this.length - 1; k++) {
        if (compareFunction(this[k], this[k + 1]) > 0) {
          tempValue = this[k];
          this[k] = this[k + 1];
          this[k + 1] = tempValue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
