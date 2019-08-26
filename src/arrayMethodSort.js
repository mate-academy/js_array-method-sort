'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0, endI = this.length - 1; i < endI; i++) {
      let wasSwap = false;
      for (let j = 0, endJ = endI - i; j < endJ; j++) {
        if ((!compareFunction && (String(this[j]) > String(this[j + 1])))
        || (compareFunction && compareFunction(this[j], this[j + 1]) > 0)) {
          const swap = this[j];
          this[j] = this[j + 1];
          this[j + 1] = swap;
          wasSwap = true;
        }
      }
      if (!wasSwap) { break; }
    }
    return this;
  };
}

module.exports = applyCustomSort;
