'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareFunction = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA > strB) {
      return 1;
    } else {
      if (strA === strB) {
        return 0;
      } else {
        return -1;
      }
    }
  };

  [].__proto__.sort2 = function(callback = compareFunction) {
    let count = 0;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const firstElem = this[i - 1];
        const secondElem = this[i];

        if (callback(firstElem, secondElem) > 0) {
          count++;
          this[i] = firstElem;
          this[i - 1] = secondElem;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
