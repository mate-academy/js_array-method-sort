'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    while (true) {
      let count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction) {
          if (compareFunction(this[i], this[i + 1]) > 0) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];

            count++;
          }
        } else {
          if (this[i].toString() > this[i + 1].toString()) {
            [this[i], this[i + 1]] = [this[i + 1], this[i]];

            count++;
          }
        }
      }

      if (count === 0) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
