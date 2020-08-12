'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = spaceArg) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const x = this[i - 1];
        const y = this[i];

        if (compareFunction(x, y) > 0) {
          count++;
          this[i - 1] = y;
          this[i] = x;
        }
      }
    } while (count > 0);

    return this;
  };
}

const spaceArg = (a, b) => {
  const strFirst = String(a);
  const strSecond = String(b);

  if (strFirst > strSecond) {
    return 1;
  } else if (strFirst === strSecond) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
