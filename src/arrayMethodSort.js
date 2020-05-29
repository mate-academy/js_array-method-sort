'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      let item = this[0];

      if (!compareFunction) {
        item = item.toString();
      }

      for (let j = 1; j < this.length; j++) {
        const previous = this[j - 1];
        const current = this[j];

        if ((!compareFunction && item > current.toString())
          || (compareFunction && compareFunction(previous, current) > 0)) {
          this[j] = previous;
          this[j - 1] = current;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
