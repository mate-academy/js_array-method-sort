'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // write code here
    const newCompareFunc = (a, b) => {
      let firstItem = a;
      let secondItem = b;
      
      if (typeof a === 'number' && typeof b === 'number') {
        firstItem = String(a);
        secondItem = String(b)
      }

      if (firstItem < secondItem) {
        return -1;
      }

      if (firstItem > secondItem) {
        return 1;
      }

      return 0;
    };

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        if (compareFunction) {
          if (compareFunction(this[j], this[j + 1]) > 0) {
            [this[j], this[j + 1]] = [this[j + 1], this[j]];
          }
        } else if (newCompareFunc(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
