'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction === 'function') {
      for (let j = 0; j < this.length; j++) {
        for (let i = 1; i < this.length; i++) {
          const current = this[i];
          const prev = this[i - 1];

          if (compareFunction(prev, current) > 0) {
            this[i - 1] = current;
            this[i] = prev;
          }
        }
      }
    } else {
      for (let j = 0; j < this.length; j++) {
        for (let i = 1; i < this.length; i++) {
          const current = this[i];
          const prev = this[i - 1];

          if (current.toString() < prev.toString()) {
            this[i - 1] = current;
            this[i] = prev;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
