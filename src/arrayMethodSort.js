'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortAsString) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          this[i - 1] = curr;
          this[i] = prev;
          count++;
        };
      };
    } while (count > 0);

    return this;
  };
}

const sortAsString = (a, b) => {
  const prev = String(a);
  const curr = String(b);

  if (prev > curr) {
    return 1;
  } else if (prev < curr) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
