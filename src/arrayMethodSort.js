'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    const aItem = String(a);
    const bItem = String(b);

    if (aItem > bItem) {
      return 1;
    }

    if (aItem === bItem) {
      return 0;
    }

    return -1;
  }) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const currentValue = this[i];
        const previousValue = this[i - 1];

        if (compareFunction(previousValue, currentValue) > 0) {
          this[i] = previousValue;
          this[i - 1] = currentValue;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
