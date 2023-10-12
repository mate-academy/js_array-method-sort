'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (typeof compareFunction === 'function') {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            // Swap elements if compareFunction returns a positive value
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    } else {
      // Default sorting behavior (as strings)
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (String(this[i]) > String(this[j])) {
            // Swap elements if default comparison returns true
            const temp = this[i];

            this[i] = this[j];
            this[j] = temp;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
