'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let cmp;

    if (typeof compareFunction === 'function') {
      cmp = (a, b) => compareFunction(a, b);
    } else {
      cmp = (a, b) =>
        String(a) > String(b) ? 1 : String(a) < String(b) ? -1 : 0;
    }

    for (let i = 0; i < this.length; i++) {
      let b = 0;

      for (let j = i; j < this.length; j++) {
        if (cmp(this[i], this[j]) > 0) {
          b = this[i];
          this[i] = this[j];
          this[j] = b;
          b = 0;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
