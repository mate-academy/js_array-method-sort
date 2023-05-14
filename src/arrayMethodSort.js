'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultFunction = (prevValue, currentValue) => {
    const prevStr = `${prevValue}`;
    const currentStr = `${currentValue}`;

    if (currentStr < prevStr) {
      return 1;
    } else if (currentStr === prevStr) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prevItem = this[i - 1];
        const currentItem = this[i];

        if (compareFunction(prevItem, currentItem) > 0) {
          this[i - 1] = currentItem;
          this[i] = prevItem;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
