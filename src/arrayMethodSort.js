'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here

    if (!arguments.length) {
      for (let i = 0; i < this.length; i++) {
        for (let j = 1; j < this.length; j++) {
          const a = this[j - 1].toString();
          const b = this[j].toString();

          if (a > b) {
            [this[j - 1], this[j]] = [this[j], this[j - 1]];
          }
        }
      }

      return this;
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        const a = this[j - 1];
        const b = this[j];

        if (compareFunction(a, b) > 0) {
          [this[j - 1], this[j]] = [this[j], this[j - 1]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
