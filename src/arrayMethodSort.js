'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const defaultCompare = (a, b) => {
      return a.toString() > b.toString();
    };

    const useFunction = compareFunction || defaultCompare;

    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (useFunction(this[i], this[j]) > 0) {
          const firstElement = this[i];

          this[i] = this[j];
          this[j] = firstElement;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
