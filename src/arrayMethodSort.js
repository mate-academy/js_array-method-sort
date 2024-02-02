'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    const tempArray = this.slice();

    for (let i = 0; i < tempArray.length - 1; i++) {
      for (let j = i + 1; j < tempArray.length; j++) {
        const comparisonFunc = compareFunction || compareAsFunction;
        const functionA = String(tempArray[i]);
        const functionB = String(tempArray[j]);

        if (comparisonFunc(functionA, functionB) > 0) {
          [tempArray[i], tempArray[j]] = [tempArray[j], tempArray[i]];
        }
      }
    }

    this.splice(0, this.length, ...tempArray);

    return this;
  };
}

function compareAsFunction(functionA, functionB) {
  return functionA > functionB;
}

module.exports = applyCustomSort;
