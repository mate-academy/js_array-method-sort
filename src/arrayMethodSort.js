'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = standart) {
    for (let i = 0; i < this.length - 1; i++) {
      let temp;
      const funcResult = compareFunction(this[i], this[i + 1]);

      if (funcResult > 0) {
        temp = this[i + 1];
        this[i + 1] = this[i];
        this[i] = temp;
        i = -1;
      }
    }

    return this;
  };
}

const standart = (a, b) => {
  return String(a) > String(b);
};

module.exports = applyCustomSort;
