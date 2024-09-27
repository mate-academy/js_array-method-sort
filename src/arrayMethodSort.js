'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareDefault = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    }
    
    if (strA === strB) {
      return 0;
    }
    
    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let check;

    do {
      check = false;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(curr, prev) < 0) {
          this[i] = prev;
          this[i - 1] = curr;
          check = true;
        }
      }
    } while (check);

    return this;
  };
}

module.exports = applyCustomSort;
