'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareString(a, b) {
    const firstValue = String(a);
    const secondValue = String(b);

    if (firstValue < secondValue) {
      return -1;
    }

    if (firstValue > secondValue) {
      return 1;
    }

    return 0;
  }

  [].__proto__.sort2 = function(compareFunction = compareString) {
    const lengthOfArr = this.length;

    for (let i = 0; i < lengthOfArr; i++) {
      let flag = false;

      for (let j = 0; j < lengthOfArr - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
          flag = true;
        }
      }

      if (!flag) {
        break;
      }
    }

    return this;
  };
};

module.exports = applyCustomSort;
