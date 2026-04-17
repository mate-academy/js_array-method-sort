'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const a = this[j];
        const b = this[j + 1];

        let compareFunctionResult;

        if (compareFunction) {
          compareFunctionResult = compareFunction(a, b);
        } else if (String(a) > String(b)) {
          compareFunctionResult = 1;
        } else if (String(a) < String(b)) {
          compareFunctionResult = -1;
        } else {
          compareFunctionResult = 0;
        }

        if (compareFunctionResult > 0) {
          this[j] = b;
          this[j + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
