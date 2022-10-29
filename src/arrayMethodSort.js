'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultSort) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];

        if (compareFunction(prev, this[i]) > 0) {
          count++;
          this[i - 1] = this[i];
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };

  const defaultSort = (a, b) => {
    const aString = a.toString();
    const bString = b.toString();

    if (aString > bString) {
      return 1;
    } else if (aString === bString) {
      return 0;
    } else {
      return -1;
    }
  };
}

module.exports = applyCustomSort;
