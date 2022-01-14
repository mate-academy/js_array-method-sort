'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareAsStrings = (a, b) => {
    const stringA = String(a);
    const StringB = String(b);

    if (stringA > StringB) {
      return 1;
    } else if (stringA === StringB) {
      return 0;
    } else {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        const result = compareFunction(first, second);

        if (result > 0) {
          this[i - 1] = second;
          this[i] = first;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
