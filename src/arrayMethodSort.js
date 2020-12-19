'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const compareBaseFunction = (x, y) => String(x) > String(y);

  [].__proto__.sort2 = function(compareFunction = compareBaseFunction) {
    let temp;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
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
