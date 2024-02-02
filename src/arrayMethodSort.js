'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = (a, b) => {
    if (String(a) < String(b)) {
      return -1;
    }

    if (String(a) > String(b)) {
      return 1;
    }

    return 0;
  }) {
    let n = this.length;
    let swapped;

    do {
      swapped = false;

      for (let i = 1; i < n; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const temp = this[i - 1];

          this[i - 1] = this[i];
          this[i] = temp;
          swapped = true;
        }
      }
      n--;
    } while (swapped);

    return this;
  };
}

module.exports = applyCustomSort;
