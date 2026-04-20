'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    let sorted = false;

    while (!sorted) {
      sorted = true;

      for (let i = 1; i < this.length; i++) {
        const a = this[i - 1];
        const b = this[i];

        if (compareFunction(a, b) > 0) {
          sorted = false;
          [this[i - 1], this[i]] = [b, a];
        }
      }
    }

    return this;
  };
}

function compareStrings(a, b) {
  const aA = String(a);
  const bB = String(b);

  if (aA > bB) {
    return 1;
  }

  if (aA < bB) {
    return -1;
  }

  return 0;
};

module.exports = applyCustomSort;
