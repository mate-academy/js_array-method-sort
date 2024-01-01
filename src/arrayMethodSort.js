'use strict';

/**
 * Implement method Sort
 */
function applyCustomSort() {
  [].__proto__.sort2 = function(compareFunction) {
    let stateCondition;

    do {
      stateCondition = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          stateCondition = true;
        }
      }
    } while (stateCondition);

    return this;
  };
}

module.exports = applyCustomSort;
