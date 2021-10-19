'use strict';

/**
 * Implement method Sort
 */

const standartSort = (leftItem, rightItem) => {
  if (`${leftItem}` > `${rightItem}`) {
    return 1;
  };

  if (`${leftItem}` < `${rightItem}`) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = standartSort) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const item1 = this[i - 1];
        const item2 = this[i];

        if (compareFunction(item1, item2) >= 1) {
          count++;
          this[i - 1] = item2;
          this[i] = item1;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
