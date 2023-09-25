'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = null) {
    if (this.length < 2) {
      return this;
    }

    let compareFn = compareFunction;

    if (typeof compareFunction !== 'function') {
      compareFn = (a, b) => {
        if (String(a) < String(b)) {
          return -1;
        }

        if (String(a) > String(b)) {
          return 1;
        }

        return 0;
      };
    }

    const length = this.length;

    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
        if (compareFn(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
