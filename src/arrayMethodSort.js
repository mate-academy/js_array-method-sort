'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsString) {
    let count = 0;

    do {
      count = 0;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          const tmp = this[i];

          this[i] = this[i + 1];
          this[i + 1] = tmp;
          count++;
        }
      }
    } while (count > 0);

    return this;
  };
}

function compareAsString(a, b) {
  const first = a.toString();
  const second = b.toString();

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
