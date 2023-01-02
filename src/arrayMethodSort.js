'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sorted) {
    let done = false;

    while (!done) {
      done = true;

      for (let i = 1; i < this.length; i++) {
        const first = this[i - 1];
        const second = this[i];

        if (compareFunction(first, second) > 0) {
          done = false;
          this[i - 1] = second;
          this[i] = first;
        }
      }
    }

    return this;
  };
}

const sorted = (a, b) => {
  const strFirst = a.toString();
  const strSecond = b.toString();

  if (strFirst > strSecond) {
    return 1;
  } else
  if (strFirst < strSecond) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
