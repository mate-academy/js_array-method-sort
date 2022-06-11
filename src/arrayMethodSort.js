'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction = defaultFunction) {
    let permutations;

    do {
      permutations = false;

      for (let i = 1; i < this.length; i++) {
        if (compareFunction(this[i - 1], this[i]) > 0) {
          [this[i - 1], this[i]] = [this[i], this[i - 1]];
          permutations = true;
        }
      }
    } while (permutations);

    return this;
  };

  function defaultFunction(a, b) {
    const firstValue = String(a);
    const secondValue = String(b);

    if (firstValue > secondValue) {
      return 1;
    }

    if (firstValue === secondValue) {
      return 0;
    }

    return -1;
  }
}

module.exports = applyCustomSort;
