'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const curr = this[i];

        if (compareFunction(prev, curr) > 0) {
          count++;
          this[i - 1] = curr;
          this[i] = prev;
        }
      }
    } while (count > 0);

    return this;
  };
}

const compareAsStrings = (a, b) => {
  const strA = String(a).toLocaleLowerCase();
  const strB = String(b).toLocaleLowerCase();

  if (strA > strB) {
    return 1;
  }

  if (strA < strB) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
