'use strict';

function compareAsStrings(elem1, elem2) {
  const elem1Str = String(elem1);
  const elem2Str = String(elem2);

  if (elem1Str > elem2Str) {
    return 1;
  }

  if (elem1Str < elem2Str) {
    return -1;
  }

  return 0;
}

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
