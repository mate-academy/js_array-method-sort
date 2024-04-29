'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = comparison) {
    for (let i = 0; i < this.length; i++) {
      for (let k = i; k < this.length; k++) {
        if (compareFunction(String(this[i]), String(this[k])) === 1) {
          this.splice(i, 0, this[k]);
          this.splice(k + 1, 1);
        }
      }
    }

    return this;
  };

  function comparison(a, b) {
    if (a < b) {
      return -1;
    }

    if (a > b) {
      return 1;
    }

    return 0;
  }
}

module.exports = applyCustomSort;
