'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = 0) {

    if (compareFunction === 0) {
      for (let i = 0; i < this.length; i++) {
        if (i < 0) {
          i = 0;
        }

        if (this[i + 1] && this[i].toString() > this[i + 1].toString()) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          i -= 2;
        }
      }

      return this;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (i < 0) {
        i = 0;
      }

      if (compareFunction(this[i], this[i + 1]) > 0) {
        const temp = this[i];

        this[i] = this[i + 1];
        this[i + 1] = temp;
        i -= 2;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
