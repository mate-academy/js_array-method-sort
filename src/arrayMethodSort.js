'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = stringCompareElements) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = 0; j < this.length - 1; j++) {
        const firstValue = this[j];
        const secondValue = this[j + 1];

        if (compareFunction(firstValue, secondValue) > 0) {
          this[j] = secondValue;
          this[j + 1] = firstValue;
        }
      }
    }

    return this;
  };

  function stringCompareElements(a, b) {
    const stringA = String(a);
    const stringB = String(b);

    if (stringA < stringB) {
      return -1;
    } else if (stringA > stringB) {
      return 1;
    } else {
      return 0;
    }
  }
}

module.exports = applyCustomSort;
