'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    let createdFunction = compareFunction;

    if (typeof createdFunction !== 'function') {
      createdFunction = (a, b) => (String(a) > String(b) ? 1 : -1);
    }

    for (let i = 0; i < this.length - 1; i++) {
      for (let y = 0; y < this.length - 1 - i; y++) {
        const compareResult = createdFunction(this[y], this[y + 1]);

        if (compareResult > 0) {
          const value1 = this[y + 1];

          this[y + 1] = this[y];
          this[y] = value1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
