'use strict';

/**
 * Implement method Sort
 */
const compareStrings = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA === strB) {
    return 0;
  };

  if (strA > strB) {
    return 1;
  };

  return -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareStrings) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
