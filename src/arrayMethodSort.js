'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let toRepeat = true;

    const bubbleSort = () => {
      const defaultCheck = (a, b) => {
        if (String(a) > String(b)) {
          return 1;
        }

        return -1;
      };

      const checkCondition = compareFunction || defaultCheck;

      for (let i = 1; i < this.length; i++) {
        if (checkCondition(this[i - 1], this[i]) > 0) {
          const oldValue = this[i - 1];

          this[i - 1] = this[i];
          this[i] = oldValue;
          toRepeat = true;
        }
      }
    };

    while (toRepeat) {
      toRepeat = false;
      bubbleSort();
    }

    return this;
  };
}

module.exports = applyCustomSort;
