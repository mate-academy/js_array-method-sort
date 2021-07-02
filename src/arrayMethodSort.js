'use strict';

/**
 * Implement method Sort
 */
const compareFunctionDefault = (a, b) => (String(a) < String(b) ? 0 : 1);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionDefault) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
