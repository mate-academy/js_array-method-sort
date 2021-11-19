'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = sortStr) {
    let count;

    do {
      count = 0;

      for (let i = 1; i < this.length; i++) {

        if (compareFunction(this[i - 1], this[i]) > 0) {

          [this[i], this[i - 1]] = [this[i - 1], this[i]];
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function sortStr(prev, cur) {
  if (String(prev) > String(cur)) {
    return 1;
  }

  if (String(prev) < String(cur)) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
