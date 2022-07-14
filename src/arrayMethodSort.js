'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      let current = this[i];

      for (let j = i + 1; j < this.length; j++) {
        const previous = this[j];

        if (compareFunction) {
          if (compareFunction(current, previous) > 0) {
            this[j] = current;
            this[i] = previous;
            current = this[i];
          }
          continue;
        }

        if (current.toString() > previous.toString()) {
          this[j] = current;
          this[i] = previous;
          current = this[i];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
