'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length - 1; i++) {
      let j = 0;

      do {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          const temporary = this[j];

          this[j] = this[j + 1];
          this[j + 1] = temporary;
        }

        j++;
      } while (j > 0 && j < this.length - i - 1);
    }

    return this;
  };
}

const defaultCompare = (a, b) => {
  return Number(String(a) > String(b));
};

module.exports = applyCustomSort;
