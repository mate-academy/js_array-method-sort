'use strict';

/**
 * Implement method Sort
 */
const defaultCheck = (a, b) => String(a) > String(b) ? 1 : -1;

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCheck) {
    let toRepeat = true;

    const bubbleSort = () => {
      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
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
