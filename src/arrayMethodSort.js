'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  // write code here
  const compare = (a, b) => {
    const itemA = a.toString();
    const itemB = b.toString();

    return (itemA > itemB) ? 1
      : (itemA < itemB) ? -1
        : 0;
  };

  [].__proto__.sort2 = function(compareFunction = compare) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const currentValue = this[i];
        const nextValue = this[i + 1];

        if (compareFunction(currentValue, nextValue) > 0) {
          this[i] = nextValue;
          this[i + 1] = currentValue;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
};
module.exports = applyCustomSort;
