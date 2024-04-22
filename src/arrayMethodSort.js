'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = basicComparing) {
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < this.length - 1 - i; j++) {
        const value = this[j];
        const nextValue = this[j + 1];

        if (compareFunction(value, nextValue) > 0) {
          this[j] = nextValue;
          this[j + 1] = value;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;

function basicComparing(a, b) {
  const strA = String(a);
  const strB = String(b);

  if (strA > strB) {
    return 1;
  }

  if (strA < strB) {
    return -1;
  }

  return 0;
}
