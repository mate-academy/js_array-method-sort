'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunction2) {
    let countr = 1;

    while (countr !== 0) {
      countr = 0;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];
        const value = compareFunction(current, next);

        if (value > 0) {
          this[i] = next;
          this[i + 1] = current;
          countr++;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

const compareFunction2 = (a, b) => {
  if (a.toString() > b.toString()) {
    return 1;
  }

  return -1;
};
