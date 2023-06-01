'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = spaceArg) {
    // write code here
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          count++;
          this[i - 1] = b;
          this[i] = a;
        }
      }
    } while (count > 0);

    return this;
  };
}

const spaceArg = (a, b) => {
  const strOne = String(a);
  const strTwo = String(b);

  if (strOne > strTwo) {
    return 1;
  } else if (strOne === strTwo) {
    return 0;
  } else {
    return -1;
  }
};

module.exports = applyCustomSort;
