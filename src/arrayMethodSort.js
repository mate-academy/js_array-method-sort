'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let y = i + 1; y < this.length; y++) {
        if (compareFunction) {
          const comparison = compareFunction(this[i], this[y]);

          if (comparison > 0) {
            const temp = this[i];

            this[i] = this[y];
            this[y] = temp;
          }

          continue;
        }

        if (String(this[i]) > String(this[y])) {
          const temp = this[i];

          this[i] = this[y];
          this[y] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
