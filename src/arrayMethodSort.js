'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (
    compareFunction = (first, second) => {
      if (String(first) > String(second)) {
        return 1;
      } else if (String(first) < String(second)) {
        return -1;
      } else {
        return 0;
      }
    },
  ) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i - 1; j >= 0; j--, i--) {
        if (compareFunction(this[i], this[j]) < 0) {
          const copiedArray = [...this];

          this[i] = copiedArray[j];
          this[j] = copiedArray[i];
        } else {
          break;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
