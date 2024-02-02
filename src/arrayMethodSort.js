'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i + 1; j < this.length; j++) {
        const comparisonFunc = compareFunction || compareAsFunction;
        const functionA = String(this[i]);
        const functionB = String(this[j]);

        if (comparisonFunc(functionA, functionB) > 0) {
          [this[i], this[j]] = [this[j], this[i]];
        }
      }
    }

    return this;
  };
}

function compareAsFunction(functionA, functionB) {
  return functionA > functionB;
}

module.exports = applyCustomSort;
