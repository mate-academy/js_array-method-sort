'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(a, b) {
    const firstItem = a.toString();
    const secondItem = b.toString();

    if (firstItem > secondItem) {
      return 1;
    } else if (firstItem === secondItem) {
      return 0;
    }

    return -1;
  }

  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          counter++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
