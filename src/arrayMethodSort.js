'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) > 0) {
            // Swap elements if they are in the wrong order
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (String(this[i]) > String(this[j])) {
            // Swap elements if they are in the wrong order
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
