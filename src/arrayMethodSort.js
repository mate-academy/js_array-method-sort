'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareDefault = (a, b) => {
    let strA = String(a);
    let strB = String(b);

    if (strA > strB) {
      return 1;
    } else if (strA === strB) {
      return 0
    } else {
      return -1;
    }
  }

  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let count;

    do {
      count = 0;
      
      for (let i = 1; i < this.length; i++) {
        let prev = this[i - 1];
        let curr = this[i]

        if (compareFunction(curr, prev) < 0) {
          this[i] = prev;
          this[i - 1] = curr;
          count++;
        }
      }
    } while (count > 0)

    return this;
  };
}

module.exports = applyCustomSort;
