'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let isReplaced = true;

    while (isReplaced) {
      isReplaced = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          const tempValue = this[i];

          this[i] = this[i - 1];
          this[i - 1] = tempValue;
          isReplaced = true;
        }
      }
    }

    return this;
  };
}

function compareDefault(valueA, valueB) {
  const stringA = valueA.toString();
  const stringB = valueB.toString();

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
