'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    if (arguments.length === 0) {
      for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - 1 - i; j++) {
          if (String(this[j]) > String(this[j + 1])) {
            [this[j + 1], this[j]] = [this[j], this[j + 1]];
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (compareFunction(this[i], this[i + 1]) > 0) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        i = -1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
