'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const current = this[i];
        const next = this[j];

        if (!compareFunction && String(current) > String(next)) {
          this[i] = next;
          this[j] = current;
        }

        if (compareFunction && compareFunction(current, next) > 0) {
          this[i] = next;
          this[j] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
