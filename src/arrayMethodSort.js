'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (leftItem, rightItem) => {
    if (`${leftItem}` > `${rightItem}`) {
      return 1;
    }
  }) {
    // write code here
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const item1 = this[i];
        const item2 = this[j];

        if (compareFunction(this[i], this[j]) >= 1) {
          this[i] = item2;
          this[j] = item1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
