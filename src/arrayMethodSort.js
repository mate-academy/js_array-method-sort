'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = compareAsStrings) {
    let swiped;

    do {
      swiped = false;

      for (let i = 1; i < this.length; i++) {
        const current = this[i];
        const comparedValue = compareFunction(this[i - 1], this[i]);

        if (comparedValue > 0) {
          this[i] = this[i - 1];
          this[i - 1] = current;
          swiped = true;
        }
      }
    } while (swiped);

    return this;
  };
}

function compareAsStrings(a, b) {
  const stringA = String(a);
  const stringB = String(b);

  if (stringA > stringB) {
    return 1;
  }

  if (stringA < stringB) {
    return -1;
  }

  return 0;
}

module.exports = applyCustomSort;
