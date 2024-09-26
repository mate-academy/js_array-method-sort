'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const DEFAULT_COMPARE_FUNCTION = (item1, item2) => {
    return item1.toString() > item2.toString()
      ? 1
      : item1.toString() > item2.toString()
        ? 0
        : -1;
  };

  [].__proto__.sort2 = function(compareFunction = DEFAULT_COMPARE_FUNCTION) {
    for (let i = 0; i < this.length; i++) {
      let isSorted = true;

      for (let k = 0; k < this.length - i - 1; k++) {
        if (compareFunction(this[k], this[k + 1]) > 0) {
          const temp = this[k];

          this[k] = this[k + 1];
          this[k + 1] = temp;
          isSorted = false;
        }
      }

      if (isSorted) {
        break;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
