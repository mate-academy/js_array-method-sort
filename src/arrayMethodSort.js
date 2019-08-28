'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0, endArray = this.length - 1; i < endArray; i++) {
      let isSwap = false;

      for (let j = 0, endJ = endArray - i; j < endJ; j++) {
        if ((!compareFunction && (String(this[j]) > String(this[j + 1])))
        || (compareFunction && compareFunction(this[j], this[j + 1]) > 0)) {
          const cachedItem = this[j];
          this[j] = this[j + 1];
          this[j + 1] = cachedItem;
          isSwap = true;
        }
      }

      if (!isSwap) { break; }
    }

    return this;
  };
}

module.exports = applyCustomSort;
