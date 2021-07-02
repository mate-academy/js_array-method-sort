'use strict';

/**
 * Implement method Sort
 */
const compareFunctiondefault = (a, b) => (String(a) < String(b) ? 0 : 1);

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctiondefault) {
    for (let i = 0; i < this.length; i++) {
      for (let j = i + 1; j < this.length; j++) {
        if (compareFunction(this[i], this[j]) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        } else {
          continue;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
