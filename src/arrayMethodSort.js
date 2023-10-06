'use strict';

/**
 * Implement method Sort
 */
function compareAsStrings(...args) {
  const first = String(args[0]);
  const second = String(args[1]);

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let count;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          count++;
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    } while (count > 0);

    return this;
  };
}

module.exports = applyCustomSort;
