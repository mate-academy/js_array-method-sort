'use strict';

/**
 * Implement method Sort
 */
const makesStrings = (a, b) => {
  const [aString, bString] = [a.toString(), b.toString()];

  if (aString > bString) {
    return 1;
  }

  if (aString < bString) {
    return -1;
  }

  return 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = makesStrings) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const [prev, current] = [this[i - 1], this[i]];

        if (compareFunction(prev, current) > 0) {
          this[i - 1] = current;
          this[i] = prev;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
