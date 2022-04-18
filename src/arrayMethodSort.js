'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  function stringFunc(el1, el2) {
    if (String(el1) > String(el2)) {
      return 1;
    } else if (String(el1) === String(el2)) {
      return 0;
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = stringFunc) {
    // write code here
    let counter;

    do {
      counter = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const prev = this[i];
        const current = this[i + 1];

        if (compareFunction(prev, current) > 0) {
          this[i] = current;
          this[i + 1] = prev;

          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
