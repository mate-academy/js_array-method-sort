'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = itemsComparison) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let y = i + 1; y < this.length; y++) {
        if (compareFunction(this[i], this[y]) > 0) {
          const tempValue = this[i];

          this[i] = this[y];
          this[y] = tempValue;
        }
      }
    }

    return this;
  };
}

function itemsComparison(item1, item2) {
  return item1.toString() > item2.toString();
}

module.exports = applyCustomSort;
