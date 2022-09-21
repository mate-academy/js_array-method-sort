'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (`${a}` > `${b}`) {
      return 1;
    } else if (`${a}` < `${b}`) {
      return -1;
    } else {
      return 0;
    }
  }) {
    let isSwapped = true;

    while (isSwapped) {
      isSwapped = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          this[i] = [this[i - 1], this[i - 1] = this[i]][0];
          isSwapped = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
