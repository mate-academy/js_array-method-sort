'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) > String(b)) {
      return 1;
    }

    if (String(a) === String(b)) {
      return 0;
    }

    return -1;
  }) {
    let shift;

    do {
      shift = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const temp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = temp;
          shift++;
        }
      }
    } while (shift > 0);

    return this;
  };
}

module.exports = applyCustomSort;
