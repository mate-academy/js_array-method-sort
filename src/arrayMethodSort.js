'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previosValue = this[i - 1];
        const nextValue = this[i];

        if (compareFunction(previosValue, nextValue) > 0) {
          this[i - 1] = nextValue;
          this[i] = previosValue;

          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareStrings(previos, next) {
  const previosString = String(previos);
  const nextString = String(next);

  if (previosString > nextString) {
    return 1;
  }

  return -1;
}

module.exports = applyCustomSort;
