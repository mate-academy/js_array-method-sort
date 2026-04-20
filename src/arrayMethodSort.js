'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = strCompare) {
    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        const current = this[i];
        const next = this[i + 1];

        if (compareFunction(current, next) > 0) {
          [this[i], this[i + 1]] = [next, current];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
}

function strCompare(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  } else if (stringA < stringB) {
    return -1;
  } else {
    return 0;
  }
}

module.exports = applyCustomSort;
