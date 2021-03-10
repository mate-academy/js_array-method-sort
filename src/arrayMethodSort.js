'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsChars = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    if (strA < strB) {
      return -1;
    } else if (strA > strB) {
      return 1;
    }

    return 0;
  };

  [].__proto__.sort2 = function(compareFunction = compareAsChars) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const tmp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = tmp;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
