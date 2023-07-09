'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFn) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

function defaultCompareFn(a, b) {
  if (String(a) < String(b)) {
    return -1;
  } else if (String(a) > String(b)) {
    return 1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
