'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareFunctionDefault) {
    let isChanged = true;

    while (isChanged) {
      isChanged = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i], this[i - 1]] = [this[i - 1], this[i]];
          isChanged = true;
        }
      }
    }

    return this;
  };
}

function compareFunctionDefault(first, second) {
  const firstString = first.toString();
  const secondString = second.toString();

  if (firstString > secondString) {
    return 1;
  } else if (firstString < secondString) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
