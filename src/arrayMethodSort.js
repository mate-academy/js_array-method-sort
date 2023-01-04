'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareString) {
    for (let i = 1; i < this.length; i++) {
      for (let j = 1; j < this.length; j++) {
        const current = this[j];
        const prev = this[j - 1];

        if (compareFunction(prev, current) > 0) {
          this[j] = prev;
          this[j - 1] = current;
        }
      }
    };

    return this;
  };
}

const compareString = (a, b) => {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  }
};

module.exports = applyCustomSort;
