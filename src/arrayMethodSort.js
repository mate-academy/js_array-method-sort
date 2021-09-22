'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code her
    if (compareFunction) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this.length; j++) {
          if (compareFunction(this[i], this[j]) < 0) {
            [this[i], this[j]] = [this[j], this[i]];
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (this[j].toString() < this[i].toString()) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
