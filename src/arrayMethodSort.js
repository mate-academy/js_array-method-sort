'use strict';

/**
 * Implement method Sort
 */
function compareStrings(a, b) {
  const strA = a.toString();
  const strB = b.toString();

  return strA > strB ? 1 : strA < strB ? -1 : 0;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const cur = this[i];

        if (compareFunction(prev, cur) > 0) {
          this[i] = prev;
          this[i - 1] = cur;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
