'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    let count;

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

function defaultCompare(x, y) {
  const first = x.toString();
  const second = y.toString();

  if (first > second) {
    return 1;
  }

  if (first < second) {
    return -1;
  }

  if (first === second) {
    return 0;
  }
}

module.exports = applyCustomSort;
