'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = customCompare) {
    if (this.length < 2) {
      return this;
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          const current = this[i];
          const next = this[j];

          if (compareFunction(current, next) > 0) {
            const temp = current;

            this[i] = next;
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
}

function customCompare(a, b) {
  return a.toString() > b.toString();
}

module.exports = applyCustomSort;
