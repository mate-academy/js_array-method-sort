'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let sortFunction = compareFunction;

    if (sortFunction === undefined) {
      sortFunction = (a, b) => String(a) > String(b);
    }

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (sortFunction(this[j], this[j + 1]) > 0) {
          const tmp = this[j];

          this[j] = this[j + 1];
          this[j + 1] = tmp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
