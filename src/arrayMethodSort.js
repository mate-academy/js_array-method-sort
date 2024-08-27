'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (a.toString() > b.toString()) {
        return 1;
      } else if (a.toString() === b.toString()) {
        return 0;
      } else {
        return -1;
      }
    },
  ) {
    let saveValue;

    for (let j = 1; j < this.length; j++) {
      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          saveValue = this[i];
          this[i] = this[i + 1];
          this[i + 1] = saveValue;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
