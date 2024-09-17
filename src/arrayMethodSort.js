'use strict';

/**
 * Implement method Sort
 */
function compareByDefault(value1, value2) {
  const srtingA = String(value1);
  const srtingB = String(value2);

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
        const value1 = this[i];
        const value2 = this[j];

        if (compareFunction(value1, value2) > 0) {
          this[i] = value2;
          this[j] = value1;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
