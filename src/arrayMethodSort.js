'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let wasChanged = false;

    do {
      wasChanged = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction === undefined) {
          if (this[i - 1].toString() > this[i].toString()) {
            wasChanged = true;
            this.splice(i - 1, 2, this[i], this[i - 1]);
          }
        } else if (compareFunction(this[i - 1], this[i]) > 0) {
          wasChanged = true;
          this.splice(i - 1, 2, this[i], this[i - 1]);
        }
      }
    } while (wasChanged);

    return this;
  };
}

module.exports = applyCustomSort;
