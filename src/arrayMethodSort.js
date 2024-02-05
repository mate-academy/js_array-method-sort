'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    function swapItems(index) {
      const temp = this[index];

      this[index] = this[index - 1];
      this[index - 1] = temp;
    }

    for (let i = 1; i < this.length; i++) {
      if (compareFunction) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          swapItems.call(this, i);
          i = 0;
        }
        continue;
      }

      if (this[i - 1].toString() > this[i].toString()) {
        swapItems.call(this, i);
        i = 0;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
