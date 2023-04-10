'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (compareFunction(this[j], this[i]) < 0) {
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }
    } else {
      for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j < this.length; j++) {
          if (String(this[j]) < String(this[i])) {
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
