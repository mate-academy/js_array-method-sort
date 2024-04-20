'use strict';

/**
 * Implement method Sort
 */
function compareByDefault(a, b) {
  const srtingA = String(a);
  const srtingB = String(b);

  if (srtingA < srtingB) {
    return -1;
  }

  if (srtingA > srtingB) {
    return 1;
  }

  return 0;
}

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction = compareByDefault) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const a = this[i];
        const b = this[j];

        if (compareFunction(a, b) > 0) {
          this[i] = b;
          this[j] = a;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
