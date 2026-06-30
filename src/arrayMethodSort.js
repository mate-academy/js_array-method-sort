'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let memval = 0;
    let memstr = '';

    if (compareFunction === undefined) {
      for (let i = 1; i < this.length; i++) {
        for (let j = i; j > 0; j--) {
          if (String(this[j]) >= String(this[j - 1])) {
            break;
          }

          if (String(this[j]) < String(this[j - 1])) {
            memstr = this[j];
            this[j] = this[j - 1];
            this[j - 1] = memstr;
          }
        }
      }

      return this;
    }

    for (let i = 1; i < this.length; i++) {
      for (let j = i; j > 0; j--) {
        if (compareFunction(this[j], this[j - 1]) >= 0) {
          break;
        }

        if (compareFunction(this[j], this[j - 1]) < 0) {
          memval = this[j];
          this[j] = this[j - 1];
          this[j - 1] = memval;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
