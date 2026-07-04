'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    let compare = compareFunction;

    if (!compare) {
      compare = (a, b) => {
        return String(a) > String(b) ? 1 : -1;
      };
    }

    for (let k = 0; k < this.length; k++) {
      for (let i = 0; i < this.length - 1; i++) {
        const a = this[i];
        const b = this[i + 1];

        if (compare(a, b) > 0) {
          this[i] = b;
          this[i + 1] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
