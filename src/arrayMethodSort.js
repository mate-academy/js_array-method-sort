'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (a.toString() > b.toString()) {
        return 1;
      } else {
        return -1;
      }
    },
  ) {
    let saveValue;

    for (let j = 1; j < this.length; j++) {
      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          saveValue = this[i - 1];
          this[i - 1] = this[i];
          this[i] = saveValue;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
