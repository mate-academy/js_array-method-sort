'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let operations = -1;

    while (operations !== 0) {
      operations = 0;

      if (!compareFunction) {
        for (let i = 0; i <= this.length - 1; i++) {
          if (String(this[i]) > String(this[i + 1]) && this[i + 1]) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
            operations++;
          }
        }
      } else {
        for (let i = 0; i <= this.length - 1; i++) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];
            operations++;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
