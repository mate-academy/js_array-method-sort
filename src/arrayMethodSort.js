'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compare = defaultCompare) {
    if (this.length < 2) {
      return this;
    }

    for (let j = 0; j < this.length; j++) {
      for (let i = 0; i < this.length - j - 1; i++) {
        if (compare(String(this[i]), String(this[i + 1])) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}

function defaultCompare(str1, str2) {
  return str1 > str2 ? 1 : -1;
}

module.exports = applyCustomSort;
