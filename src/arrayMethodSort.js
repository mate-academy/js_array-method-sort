'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let temp = 0;
    let comparator = compareFunction;

    if (arguments.length === 0) {
      comparator = (x, y) => {
        const stringX = String(x);
        const stringY = String(y);

        if (stringX > stringY) {
          return 1;
        } else if (stringX === stringY) {
          return 0;
        } else if (stringX < stringY) {
          return -1;
        }
      };
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (comparator(this[i], this[j]) > 0) {
          temp = this[i];
          this[i] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
