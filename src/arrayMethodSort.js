'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (compareFunction) {
          if (
            compareFunction(
              String(this[i]).toLowerCase(),
              String(this[n]).toLowerCase(),
            ) > 0
          ) {
            const previous = this[i];

            this[i] = this[n];
            this[n] = previous;
          }
        } else {
          if (String(this[i]) > String(this[n])) {
            const previous = this[i];

            this[i] = this[n];
            this[n] = previous;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
