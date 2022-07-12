'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let operationCount = -1;

    while (operationCount !== 0) {
      operationCount = 0;

      if (!compareFunction) {
        for (let i = 0; i <= this.length - 1; i++) {
          if (String(this[i]) > String(this[i + 1]) && this[i + 1]) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
            operationCount++;
          }
        }
      } else {
        for (let i = 0; i <= this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
            operationCount++;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
