'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let i = 0;

    while (true) {
      if (compareFunction) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;

          i = -1;
        }
      } else {
        if (this[i].toString() > this[i + 1].toString()) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;

          i = -1;
        }
      }

      i++;

      if (i === this.length - 1) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
