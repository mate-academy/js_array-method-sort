'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    // Default char code comparison for more stable behavior than localeCompare
    const defaultCompare = (a, b) => {
      const strA = String(a);
      const strB = String(b);
      const len = Math.min(strA.length, strB.length);

      for (let i = 0; i < len; i++) {
        const diff = strA.charCodeAt(i) - strB.charCodeAt(i);
        if (diff !== 0) return diff;
      }

      return strA.length - strB.length;
    };

    const compare = compareFunction || defaultCompare;

    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compare(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
