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
        if (compare((this[i]), (this[i + 1])) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}

function defaultCompare(toCompare1, toCompare2) {
  const str1 = String(toCompare1);
  const str2 = String(toCompare2);

  if (str1 === str2) {
    return 0;
  }

  return str1 > str2 ? 1 : -1;
}

module.exports = applyCustomSort;
