'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = func) {
    for (let i = 0; i < this.length - 1; i++) {
      let maybeDone = false;

      for (let j = 0; j < this.length - 1 - i; j++) {
        if (compareFunction(this[j], this[j + 1]) > 0) {
          [this[j], this[j + 1]] = [this[j + 1], this[j]];
          maybeDone = true;
        }
      }

      if (!maybeDone) {
        break;
      }
    }

    return this;
  };
}

function func(a, b) {
  const strA = '' + a;
  const strB = '' + b;

  return strA > strB ? 1 : strA < strB ? -1 : 0;
}

module.exports = applyCustomSort;
