'use strict';

/**
 * Implement method Sort
 */

const compareDefault = (a, b) => {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA === stringB) {
    return 0;
  }

  return stringA > stringB ? 1 : -1;
};

function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareDefault) {
    let isSwapped = true;

    while (isSwapped === true) {
      isSwapped = false;

      for (let i = 0; i <= this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0 && this[i + 1]) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          isSwapped = true;
        }
      }
    }

    return this;
  };
}

module.exports = applyCustomSort;
