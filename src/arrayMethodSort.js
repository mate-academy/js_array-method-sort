'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    const defaultCompare = (a, b) => {
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

    const compare = compareFunction || defaultCompare;

    let temp;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const num = compare(this[j], this[j + 1]);

        if (num > 0) {
          temp = this[j];
          this[j] = this[j + 1];
          this[j + 1] = temp;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
