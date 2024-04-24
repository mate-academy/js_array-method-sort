'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // const defaultSort = [].sort;

  function defaultCompare(a, b) {
    const aa = String(a);
    const bb = String(b);

    if (aa > bb) {
      return true;
    }

    return false;
  }

  [].__proto__.sort2 = function (compareFunction = defaultCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
