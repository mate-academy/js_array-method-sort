'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sort) {
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

const sort = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  } else
  if (strA < strB) {
    return -1;
  } else {
    return 0;
  }
};

module.exports = applyCustomSort;
