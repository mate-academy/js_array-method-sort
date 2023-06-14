'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompare) {
    for (let i = 0; i < this.length; i++) {
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

const defaultCompare = (a, b) => {
  const asc = a.toString() > b.toString();
  const desc = a.toString() < b.toString();

  return asc ? 1 : desc ? -1 : 0;
};

module.exports = applyCustomSort;
