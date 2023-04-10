'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const _compareFunction = compareFunction
      ? (a, b) => compareFunction(a, b) < 0
      : (a, b) => a.toString() < b.toString();

    for (let i = 0; i < this.length - 1; i++) {
      let minIndex = i;

      for (let j = i + 1; j < this.length; j++) {
        if (_compareFunction(this[j], this[minIndex])) {
          minIndex = j;
        }
      }

      if (minIndex !== i) {
        [this[i], this[minIndex]] = [this[minIndex], this[i]];
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
