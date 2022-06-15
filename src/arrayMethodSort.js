'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const previosValue = this[i - 1];
        const nextValue = this[i];

        if (compareFunction(previosValue, nextValue) > 0) {
          count++;
          this[i - 1] = nextValue;
          this[i] = previosValue;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareString(prevStr, nextStr) {
  const prevChar = String(prevStr);
  const nextChar = String(nextStr);

  if (prevChar > nextChar) {
    return 1;
  } else if (nextChar === prevChar) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
