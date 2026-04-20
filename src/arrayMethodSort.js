'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let basic = (a, b) => String(a) > String(b) ? 1 : -1;

    if (compareFunction) {
      basic = compareFunction;
    }

    for (let i = 0; i < this.length; i++) {
      for (let e = 0; e < this.length - 1; e++) {
        if (basic(this[e], this[e + 1]) > 0) {
          const pos1 = this[e];
          const pos2 = this[e + 1];

          this[e] = pos2;
          this[e + 1] = pos1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
