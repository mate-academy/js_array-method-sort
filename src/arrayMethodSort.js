'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - i - 1; j++) {
        const firstItem = this[j];
        const secondItem = this[j + 1];

        const isBigger = compareFunction
          ? compareFunction(firstItem, secondItem) > 0
          : firstItem.toString() > secondItem.toString();

        if (isBigger) {
          [this[j], this[j + 1]] = [secondItem, firstItem];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
