'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const length = this.length;

    const defaultCompare = (a, b) => {
      switch (true) {
        case String(a) > String(b):
          return 1;
        case String(a) < String(b):
          return -1;
        default:
          return 0;
      }
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 0; i < length; i++) {
      for (let j = 1; j < length; j++) {
        if (compare(this[j - 1], this[j]) > 0) {
          const temp = this[j - 1];

          this[j - 1] = this[j];
          this[j] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
