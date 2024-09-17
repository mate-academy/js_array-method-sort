'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function compareDefault(a, b) {
    const aString = String(a);
    const bString = String(b);

    if (aString > bString) {
      return 1;
    }
     if (aString === bString) {
      return 0;
    }
    
    return -1;
  }

  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    // write code here

    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previousElement = this[i - 1];
        const currentElement = this[i];

        if (compareFunction(zero, first) > 0) {
          count++;
          this[i] = zero;
          this[i - 1] = first;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
