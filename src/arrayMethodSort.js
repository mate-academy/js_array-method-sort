'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const asString = (a, b) => {
    const strA = a.toString();
    const strB = b.toString();

    if (strA > strB) {
      return 1;
    } else if (strA < strB) {
      return -1;
    } else {
      return 0;
    }
  };

  [].__proto__.sort2 = function(compareFunction = asString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (compareFunction(prev, current) > 0) {
          count++;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
