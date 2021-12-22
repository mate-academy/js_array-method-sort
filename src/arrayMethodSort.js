'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let again = 1;
    let func = (a, b) => {
      const strA = String(a);
      const strB = String(b);

      if (strA > strB) {
        return 1;
      }

      if (strA < strB) {
        return -1;
      }

      return 0;
    };

    if (compareFunction !== undefined) {
      func = compareFunction;
    }

    while (again !== 0) {
      again = 0;

      for (let i = 1; i < this.length; i++) {
        const prev = this[i - 1];
        const current = this[i];

        if (func(prev, current) > 0) {
          again = 1;
          this[i - 1] = current;
          this[i] = prev;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
