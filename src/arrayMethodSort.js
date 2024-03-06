'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  const defaultCompareFn = (a, b) => {
    const strA = String(a);
    const strB = String(b);

    for (let i = 0; i < Math.min(strA.length, strB.length); i++) {
      if (strA.charCodeAt(i) < strB.charCodeAt(i)) {
        return -1;
      } else if (strA.charCodeAt(i) > strB.charCodeAt(i)) {
        return 1;
      }
    }

    return strA.length - strB.length;
  };

  [].__proto__.sort2 = function (compareFunction = defaultCompareFn) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
