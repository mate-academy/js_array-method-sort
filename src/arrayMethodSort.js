'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultAsString = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    } else if (strA === strB) {
      return 0;
    }

    return -1;
  };

  [].__proto__.sort2 = function(compareFunction = defaultAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElement = this[i - 1];
        const secondElement = this[i];

        if (compareFunction(firstElement, secondElement) > 0) {
          count++;
          this[i - 1] = secondElement;
          this[i] = firstElement;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
