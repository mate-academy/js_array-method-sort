'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const tempFirst = this[j];
        const tempSecond = this[j + 1];

        if (!compareFunction) {
          if (String(tempFirst) > String(tempSecond)) {
            this[j] = tempSecond;
            this[j + 1] = tempFirst;
          }
        }

        if (compareFunction) {
          if (compareFunction(tempFirst, tempSecond) > 0) {
            this[j] = tempSecond;
            this[j + 1] = tempFirst;
          }
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
