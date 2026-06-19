'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (a, b) => {
      if (String(a) > String(b)) {
        return 1;
      }

      if (String(a) < String(b)) {
        return -1;
      } else {
        return 0;
      }
    },
  ) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (compareFunction(this[i], this[n]) > 0) {
          [this[i], this[n]] = [this[n], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
