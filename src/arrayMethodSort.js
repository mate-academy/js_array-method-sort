'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let compare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let n = i + 1; n < this.length; n++) {
        if (typeof compareFunction === 'function') {
          compare = compareFunction(this[i], this[n]);
        } else {
          compare = String(this[i]) > String(this[n]);
        }

        if (compare > 0) {
          const toShift = this[i];

          this[i] = this[n];
          this[n] = toShift;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
