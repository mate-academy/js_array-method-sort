'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
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

const compareStrings = (a, b) => {
  const first = a.toString();
  const second = b.toString();

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
