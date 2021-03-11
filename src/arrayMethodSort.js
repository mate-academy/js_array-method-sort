'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareChars = (a, b) => {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA > stringB) {
      return 1;
    }

    if (stringA < stringB) {
      return -1;
    }
  };

  [].__proto__.sort2 = function(compareFunction = compareChars) {
    let counter;

    do {
      counter = 0;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;
          counter++;
        }
      }
    } while (counter > 0);

    return this;
  };
}

module.exports = applyCustomSort;
