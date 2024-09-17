'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    // write code here
    if (arguments.length === 0) {
      for (let i = 0; i < this.length - 1;) {
        const change = this[i];

        if (this[i].toString() > this[i + 1].toString()) {
          this[i] = this[i + 1];
          this[i + 1] = change;
          i > 0 ? i -= 1 : i += 1;
        } else {
          i += 1;
        }
      }

      return this;
    }

    for (let i = 0; i < this.length - 1;) {
      const value = compareFunction(this[i], this[i + 1]);
      const change = this[i];

      if (value > 0) {
        this[i] = this[i + 1];
        this[i + 1] = change;
        i > 0 ? i -= 1 : i += 1;
      } else {
        i += 1;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
