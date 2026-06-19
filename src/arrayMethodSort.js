'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => `${a}` > `${b}`) {
    function swapItems(index) {
      const temp = this[index];

      this[index] = this[index - 1];
      this[index - 1] = temp;
    }

    for (let i = 1; i < this.length; i++) {
      if (compareFunction(this[i - 1], this[i]) > 0) {
        swapItems.call(this, i);
        i = i - 2 < 1
          ? 0
          : i - 2;
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
