'use strict';

/**
 * Implement method Sort
//  */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultCompareFunction) {
    for (let a = this.length; a >= 0; a--) {
      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };

  const defaultCompareFunction = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    switch (true) {
      case strA > strB:
        return 1;
      case strA < strB:
        return -1;
      default:
        return 0;
    }
  };
};

module.exports = applyCustomSort;
