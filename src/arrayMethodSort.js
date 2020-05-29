'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      const item = this[0];

      for (let j = 1; j < this.length; j++) {
        const previous = this[j - 1];
        const next = this[j];

        if ((!compareFunction && item.toString() > next.toString())
          || (compareFunction && compareFunction(previous, next) > 0)) {
          this[j] = previous;
          this[j - 1] = next;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
